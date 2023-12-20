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
    path: '/cuentas',
    name: 'cuentas',
    component: () => import('./pages/cuentas.vue'),
  },

  {
    path: '/registroUsuario',
    name: 'registro',
    component: () => import('./pages/registroUsuario.vue'),
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('./components/Login/LoginPage.vue')
  },
  {
    path: '/creacioncuenta',
    name: 'creacioncuenta',
    component: () => import('./pages/creacioncuenta.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;