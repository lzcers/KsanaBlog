import PostList from '../views/PostList.vue'
import Post from '../views/Post.vue'
import AboutMe from '../views/AboutMe.vue'
import Project from '../views/Project.vue'

const routes: any = [
  { path: '/', component: PostList },
  { path: '/tags/:tagName', component: PostList },
  { path: '/post/:sha', component: Post },
  { path: '/aboutme', component: AboutMe },
  { path: '/Project', component: Project }
]

export default routes;
