import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/ionicons.css'
import "github-markdown-css"
import 'highlight.js/styles/tomorrow.css'


// 2. 定制一个文件，设置你想要补充的类型
//    在 types/vue.d.ts 里 Vue 有构造函数类型
declare module 'vue/types/vue' {
// 3. 声明为 Vue 补充的东西
  interface Vue {
    $$app: any
  }
}

// 存放全局信息
Vue.prototype.$$app = {}

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})