import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import ServiceIntroduction from '@/views/ServiceIntroduction.vue';
import Signin from '@/views/Signin.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/service-introduction', component: ServiceIntroduction },
  { path: '/Sign-in', name: 'Sign-in', component: Signin },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

export default router;
