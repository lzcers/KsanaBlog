import Home from '@/views/Home.vue';
import AboutMe from '@/views/AboutMe.vue';
import Post from '@/views/Post.vue';
const routes = [
  { path: '/', component: Home },
  { path: '/post/:sha', component: Post },
  { path: '/aboutme', component: AboutMe }
]

export default routes;
