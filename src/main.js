import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import routes from './router';
import 'mobi.css/dist/mobi.css';
import 'mobi-theme-dark';
Vue.use(VueRouter);

const router = new VueRouter({ routes });

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App }
});