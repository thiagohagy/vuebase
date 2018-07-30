// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/bootstrap.min.css';
import 'nprogress/nprogress.css';
import 'bootstrap';
import 'open-iconic/font/css/open-iconic-bootstrap.css';
import './assets/custom.css';

import Vue from 'vue';
import App from './App';
import router from '@/router';
import http from './services/http';
import BootstrapVue from 'bootstrap-vue';

import Toaster from 'vue-toasted';
Vue.use(Toaster, { duration: 3000 });


import Breadcrumb from "@/components/shared/Breadcrumb";
Vue.component('breadcrumb', Breadcrumb);

import AlertMessage from "@/components/shared/AlertMessage";
Vue.component('alertMessage', AlertMessage);

Vue.prototype.$http = http;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
