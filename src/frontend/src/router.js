import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('./pages/index.vue'),
  },

  {
    path: '/home',
    name: 'home',
    component: () => import('./pages/home.vue'),
  },

  {
    path: '/registerpage',
    name: 'registerpage',
    component: () => import('./pages/register.vue')
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;