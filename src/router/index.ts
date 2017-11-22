import PostList from '../views/PostList.vue'
import Post from '../views/Post.vue'
import AboutMe from '../views/AboutMe.vue'
import Project from '../views/Project.vue'
import PostEditor from '../views/PostEditor.vue'

const routes: any = [
  { path: '/', component: PostList },
  { path: '/tags/:tagName', component: PostList },
  { path: '/post/:id', component: Post },
  { path: '/aboutme', component: AboutMe },
  { path: '/project', component: Project },
  { path: '/posteditor', component: PostEditor }
]

export default routes;
