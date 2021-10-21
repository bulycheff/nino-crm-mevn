import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [ {
  path: '/',
  name: 'Home',
  component: Home,
  meta: {
    requireAuth: true,
    requireAdmin: false
  }
}, {
  path: '/registration',
  name: 'Registration',
  meta: {
    requireAuth: false,
    requireAdmin: false
  },
  component: () => import('../views/Registration')
}, {
  path: '/login',
  name: 'Login',
  meta: {
    requireAuth: false,
    requireAdmin: false
  },
  component: () => import('../views/Login')
}, {
  path: '/users',
  name: 'Users',
  meta: {
    requireAuth: true,
    requireAdmin: true
  },
  component: () => import('../views/Users')
}, {
  path: '/day',
  name: 'Day',
  meta: {
    requireAuth: true,
    requireAdmin: false
  },
  component: () => import(/* webpackChunkName: "about" */ '../views/Day.vue')
} ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach(( to, next ) => {
//   if (to.matched.some())
// })

export default router
