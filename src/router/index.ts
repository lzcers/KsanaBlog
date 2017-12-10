import Posts from '../views/Posts.vue'
import Post from '../views/Post.vue'
import AboutMe from '../views/AboutMe.vue'
import Project from '../views/Project.vue'
import PostEditor from '../views/PostEditor.vue'
import Login from '../views/Login.vue'
import Archives from '../views/Archives.vue'
import Resume from '../views/Resume.vue' 

import { authorizationCheck } from '../api'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes: any = [
  { path: '/', component: Posts },
  { path: '/login', component: Login },
  { path: '/tags/:tagName', component: Posts },
  { path: '/post/:id', component: Post },
  { path: '/aboutme', component: AboutMe },
  { path: '/project', component: Project },
  { path: '/archives', component: Archives },
  { path: '/Resume', component: Resume },
  { 
    path: '/posteditor', 
    component: PostEditor,
    meta: { requiresAuth: true }
  },
  {
    path: '/posteditor/:id', 
    component: PostEditor,
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({ routes });

// 全局路由守卫，拦截请求做登录校验
router.beforeEach((to: VueRouter.Route, from: VueRouter.Route, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 如果没登陆
    authorizationCheck()
    .then(res => res.data)
    .then(data => data.result ? next() : next(`/login?redirect=${to.path}`))
    .catch(err => {
      console.log(err)
      next('/')
    })
  } else {
    next()
  }
})

export default router;
