<template>
<div>

  <breadcrumb></breadcrumb>

  <div class="row">
    <div class="col">
      <form v-on:submit.prevent="save">

     <div class="form-group">
          <label for="name">Name</label>
          <input v-model="form.name" type="text" class="form-control" id="name" placeholder="Name">
        </div>

        <div class="form-group">
          <label for="login">Login</label>
          <input v-model="form.login" type="text" class="form-control" id="login" placeholder="Login">
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="form.email" type="email" class="form-control" id="email" placeholder="user@email.com">
        </div>

        <div class="form-group">
          <label for="role">Role</label>
          <select name="role" id="role" class="form-control" v-model="form.role">
            <option value="" disabled="true">--select--</option>
            <option value="admin">Administrator</option>
            <option value="common">Common</option>  
          </select>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input v-model="form.password" type="password" autocomplete="false" class="form-control" id="password" @change="passwordChanged()" placeholder="">
        </div>

        <div class="form-group">
          <label for="passwordConfirm">Confirm Password</label>
          <input v-model="form.passwordConfirm" type="password" autocomplete="false" class="form-control" id="passwordConfirm" placeholder="">
        </div>

        <div class="form-group">
          <router-link to="/users" class="btn btn-danger">Cancel</router-link>
          <button class="btn btn-primary float-right">Save</button>
        </div>

      </form>
    </div>
  </div>

</div>
</template>

<script>

      
     
export default {
  name: 'UsersEdit',
  data() {
    return {
      validatePassword: false,
      form: {
        login: '',
        email: '',
        role: '',
        password: '',
        passwordConfirm: '',
      }
    }
  },
  methods: {
    save() {
       if(this.form.password != this.form.passwordConfirm && this.validatePassword == true) {
        this.hasError = true
        this.errorMessage = 'Password and password confirm must be equals.';
      } else {
        this.hasError = false;
        this.$http.put('v1/usuario', this.form).then((response) => {
          if (response.data.success) {
            this.$router.push('/users')
            this.$toasted.success('User edited');
          } else {
            this.$$toasted.error('Error on edit');
          }
        });
      }
    },
    passwordChanged() {
      this.validatePassword = true;
    }
  },
  beforeMount() {
    this.$http.get('/v1/usuario/' + this.$route.params.id).then((response) => {
      if (response.data)
      this.form = response.data
    })
  }

}
</script>
