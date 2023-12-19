import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/ctaVista',
    name: 'ctaVista',
    component: () => import('./components/newAccounts/ctaVista.vue'),
  },
  {
    path: '/creacionCuentas',
    name: 'creacionCuentas',
    component: () => import('./components/newAccounts/creacionCuentas.vue'),
  },
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
    path: '/login',
    name: 'login',
    component: () => import('./components/Login/LoginPage.vue')
  {
    path: '/creacioncuenta',
    name: 'creacioncuenta',
    component: () => import('./pages/creacioncuenta.vue'),
  },
  },

  {
    path: '/registro',
    name: 'registro',
    component: () => import('./components/Register/RegisterPage.vue') 
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;