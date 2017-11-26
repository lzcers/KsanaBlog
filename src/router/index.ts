import PostList from '../views/PostList.vue'
import Post from '../views/Post.vue'
import AboutMe from '../views/AboutMe.vue'
import Project from '../views/Project.vue'
import PostEditor from '../views/PostEditor.vue'
import Login from '../views/Login.vue'
import { authorizationCheck } from '../api'

function authoCheck(to: any, from: any, next: any) {
  // 如果没登陆
  authorizationCheck()
  .then(res => res.data)
  .then(data => data.result ? next() : next(`/login?redirect=${to.path}`))
  .catch(err => {
    console.log(err)
    next('/')
  })
}
const routes: any = [
  { path: '/', component: PostList },
  { path: '/login', component: Login },
  { path: '/tags/:tagName', component: PostList },
  { path: '/post/:id', component: Post },
  { path: '/aboutme', component: AboutMe },
  { path: '/project', component: Project },
  { 
    path: '/posteditor', 
    component: PostEditor,
    beforeEnter: authoCheck
  },
  {
    path: '/posteditor/:id', 
    component: PostEditor,
    beforeEnter: authoCheck
  }
]

export default routes;
