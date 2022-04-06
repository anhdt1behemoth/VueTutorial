import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/lifecycle',
    name: 'lifecycle',
    component: () => import('../views/LifeCycleView.vue')
  },
  {
    path: '/lifecycle1',
    name: 'lifecycle1',
    component: () => import('../views/LifeCycle1View.vue')
  },
  {
    path: '/computed',
    name: 'computed',
    component: () => import('../views/ComputedView.vue')
  },
  {
    path: '/methods',
    name: 'methods',
    component: () => import('../views/MethodsView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
