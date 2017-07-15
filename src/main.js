import Vue from 'vue';
import VueRouter from 'vue-router';
import VueImg from 'v-img';

import App from './App.vue';
import routes from './routers';
import 'mobi.css/dist/mobi.css';

 Vue.use(VueRouter);
 Vue.use(VueImg);

const router = new VueRouter({ routes });

const app = new Vue({
  el: '#app',
  router,
  template: '<App />',
  components: { App }
});