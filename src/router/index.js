import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserPost from '../views/UserPost.vue'
import UserSettings from '../views/NestedNamedView/UserSettings.vue'
import UserEmailsSubscripts from '../views/NestedNamedView/UserEmailsSubscriptions.vue'
import UserProfile from '../views/NestedNamedView/UserProfile.vue'
import UserProfilePreview from '../views/NestedNamedView/UserProfilePreview.vue'

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
  },
  {
    path: '/databinding',
    name: '/databinding',
    component: () => import('../views/DataBindding.vue')
  },
  {
    path: '/users/:username/posts/:postId',
    component: UserPost
  },
  {
    path: '/settings',
    component: UserSettings,
    children: [
      {
        path: 'emails',
        component: UserEmailsSubscripts
      },
      {
        path: 'profiles',
        components: {
          default: UserProfile,
          helper: UserProfilePreview
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
