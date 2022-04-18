import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserPost from '../views/UserPost.vue'
import UserSettings from '../views/NestedNamedView/UserSettings.vue'
import UserEmailsSubscripts from '../views/NestedNamedView/UserEmailsSubscriptions.vue'
import UserProfile from '../views/NestedNamedView/UserProfile.vue'
import UserProfilePreview from '../views/NestedNamedView/UserProfilePreview.vue'
import UserNested from '../views/Nested Views/UserNested.vue'
import UserHome from '../views/Nested Views/UserHome.vue'
import UserViewsProfile from '../views/Nested Views/UserProfile.vue'
import UserPosts from '../views/Nested Views/UserPosts.vue'
import Brazil from '../views/Travel/BrazilView.vue'
import Jamaica from '../views/Travel/JamaicaView.vue'
import Panama from '../views/Travel/PanamaView.vue'
import Hawaii from '../views/Travel/HawaiiView.vue'
import UserTest from '../views/Usertest/UserTest'
import UserRou from '../views/Usertest/UserRou'
import ProfileUser from '../views/Usertest/ProfileUser'
import HomeUser from '../views/Usertest/HomeUser'
import Login from '../views/LoginView'
import Life from '../views/Lifecycle/LifecycleView.vue'
import Watcher from '../views/Watcher/WatcherView1.vue'
import Component1 from '../views/ComponentTest/componentTest.vue'
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
    path: '/shop',
    component: () => import('../views/shopTest/Shop-Item.vue')
  },
  {
    path: '/lifecycle1',
    name: 'lifecycle1',
    component: () => import('../views/LifeCycle1View.vue')
  },
  {
    path: '/lifecycleC',
    component: () => import('../views/Lifecycle/LifecycleVue.vue')
  },
  {
    path: '/computed',
    name: 'computed',
    component: () => import('../views/ComputedView.vue')
  },
  {
    path: '/watcher1',
    component: Watcher
  },
  {
    path: '/methods',
    name: 'methods',
    component: () => import('../views/MethodsView.vue')
  },
  {
    path: '/watchC',
    component: () => import('../views/Watcher/watcheView.vue')
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
    path: '/componentT',
    component: Component1
  },
  {
    path: '/lifecycleDes',
    component: () => import('../views/Lifecycle/LifecycleDes.vue')
  },
  {
    path: '/hide',
    component: () => import('../views/ComputedVue/ComputedView.vue')
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
        path: '/props',
        component: () => import('../views/ComponentTest/ComponentProps.vue')
      },
      {
        path: '/propsvue',
        component: () => import('../views/ComponentTest/ComponentProps.vue')
      },
      {
        path: 'profiles',
        components: {
          default: UserProfile,
          helper: UserProfilePreview
        }
      },
      { path: '/login', component: Login },
      {
        path: 'user/:id',
        component: UserTest,
        children: [
          { path: '', component: UserRou },
          { path: '/profile', component: ProfileUser },
          { path: '/home', component: HomeUser }
        ]
      },
      {
        path: '/lifecycle1view',
        component: () => import('../views/Lifecycle/LifecycleVue1.vue')
      },
      {
        path: '/brazil', component: Brazil
      },
      {
        path: '/jamaica', component: Jamaica
      },
      {
        path: '/panama', component: Panama
      },
      {
        path: '/hawaii', component: Hawaii
      },
      {
        path: '/life', component: Life
      },
      {
        path: '/users/:username',
        component: UserNested,
        children: [
          { path: '', component: UserHome },

          { path: 'profile', component: UserViewsProfile },

          { path: 'posts', component: UserPosts }
        ]
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
