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
    path: '/registro',
    name: 'registro',
    component: () => import('./pages/registro.vue'),
  },

  {
    path: '/iniciarSesion',
    name: 'iniciarSesion',
    component: () => import('./pages/iniciarSesion.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;