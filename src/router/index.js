import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/mostrar',
    name: 'mostrar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Mostrar.vue')
  },
  {
    path: '/formulario',
    name: 'formulario',
    component: () => import('../views/Formulario.vue')
  },
  {
    path: '/editar',
    name: 'editar',
    component: () => import('../views/EditarPersona.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
