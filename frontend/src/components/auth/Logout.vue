<template>
  <div>
    logout...
  </div>
</template>

<script>
  import authStore from '@/store/auth'

  export default {
    name: 'logout',

    mounted () {
      localStorage.removeItem('token');
      authStore.commit('LOGOUT_USER');
      this.$router.push('login');
    }
  }
</script>
