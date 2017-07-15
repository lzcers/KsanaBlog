import post from '../components/post.vue';
import gallery from '../components/gallery.vue';
import aboutMe from '../components/aboutMe.vue';

const routes = [
  { path: '/', component: post },
  { path: '/post', component: post },
  { path: '/gallery', component: gallery },
  { path: '/aboutme', component: aboutMe }
]

export default routes;
