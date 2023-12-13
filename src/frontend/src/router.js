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
    path: '/ctaVista',
    name: 'ctaVista',
    component: () => import('./components/creacionCuentas/ctaVista.vue'),
  },

  {
    path: '/ctaCorriente',
    name: 'ctaCorriente',
    component: () => import('./components/creacionCuentas/ctaCorriente.vue'),
  },

  {
    path: '/ctaAhorro',
    name: 'ctaAhorro',
    component: () => import('./components/creacionCuentas/ctaAhorro.vue'),
  },

  {
    path: '/iniciarSesion',
    name: 'iniciarSesion',
    component: () => import('./pages/iniciarSesion.vue'),
  },

  {
    path: '/tipoDeCuenta',
    name: 'tipoDeCuenta',
    component: () => import('./pages/tipoDeCuenta.vue'),
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;