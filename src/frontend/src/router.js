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
    path: '/creacioncuentas',
    name: 'creacioncuentas',
    component: () => import('./pages/creacioncuentas.vue'),
  },

  {
    path: '/ctaVista',
    name: 'ctaVista',
    component: () => import('./components/creacionCuentas/ctaVista.vue'),
  },

  {
    path: '/iniciarSesion',
    name: 'iniciarSesion',
    component: () => import('./pages/iniciarSesion.vue'),
  },

  {
    path: '/logintest',
    name: 'logintest',
    component: () => import('./pages/logintest.vue'),
  },

  {
    path: '/tipoDeCuenta',
    name: 'tipoDeCuenta',
    component: () => import('./pages/tipoDeCuenta.vue'),
  },

  {
    path: '/cuentaAhorro',
    name: 'cuentaAhorro',
    component: () => import('./pages/cuentadeahorro.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;