/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createRouter, createWebHistory } from 'vue-router'
import {  getUserState } from '../firebase'



const routes = [
  {
    path: '/',
    name: 'App',
    component: () => import('../components/Main.vue'),
    meta: { requiresAuth: true }
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: { requiresUnauth: true }
  },

  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta: { requiresUnauth: true }
  },

  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../Auth.vue'),
    meta: { requiresUnauth: true }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  const isAuth = await getUserState()
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiresUnauth = to.matched.some(record => record.meta.requiresUnauth)

  if(requiresAuth && !isAuth) next('/login')
  else if(requiresUnauth && isAuth) next('/')
  else next()
})

export default router
