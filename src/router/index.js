import Home from '@/views/Home.vue';
import AboutMe from '@/views/AboutMe.vue';
import Post from '@/views/Post.vue';
import Project from '@/views/Project.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/tags/:tagName', component: Home },
  { path: '/post/:sha', component: Post },
  { path: '/aboutme', component: AboutMe },
  { path: '/Project', component: Project }
]

export default routes;
