import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/ionicons.css'
import "github-markdown-css"
import 'highlight.js/styles/tomorrow.css'

// 存放全局信息
Vue.prototype.$$app = {}

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})