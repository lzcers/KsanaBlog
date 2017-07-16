import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import routes from './router';
import 'mobi.css';
import 'mobi-theme-dark';

 Vue.use(VueRouter);

const router = new VueRouter({ routes });

const app = new Vue({
  el: '#app',
  router,
  template: '<App />',
  components: { App }
});