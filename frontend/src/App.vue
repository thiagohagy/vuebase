<template>
  <div>
    <app-nav></app-nav>

    <div id="app" class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import authStore from "@/store/auth";
import AppNav from "@/components/shared/Nav";

export default {
  name: 'App',
  components: {
    AppNav,
  },
  beforeCreate () {
    if (!authStore.state.isLogged) {
        this.$router.push('/login')
    }
  },
}
</script>

<style>
  #nprogress .bar {
    background: #29d;

    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;

    width: 100%;
    height: 4px;
  }
</style>


