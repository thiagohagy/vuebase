// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/bootstrap.min.css';
import 'nprogress/nprogress.css';
import 'bootstrap';
import 'open-iconic/font/css/open-iconic-bootstrap.css';
import './assets/custom.css';
import './../node_modules/bootstrap-vue/dist/bootstrap-vue.css';

import Vue from 'vue';
import App from './App';
import router from '@/router';
import http from './services/http';

import fontIcon from './services/fontIcon';

//bootstrapVue for modals and etc
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);

// add paginate
import Paginate from 'vuejs-paginate';
Vue.component('paginate', Paginate);

// add toasted
import Toaster from 'vue-toasted';
Vue.use(Toaster, { duration: 3000 });

// creadcumb component
import Breadcrumb from "@/components/shared/Breadcrumb";
Vue.component('breadcrumb', Breadcrumb);

// an error message component
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
