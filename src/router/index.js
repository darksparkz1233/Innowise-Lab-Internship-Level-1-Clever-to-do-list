/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {
  createRouter,
  createWebHistory
} from 'vue-router'
import {
  getUserState
} from '../firebase'



const routes = [
  // ! Default App route
  {
    path: '/',
    name: 'App',
    component: () => import('../components/Main.vue'),
    meta: {
      requiresAuth: true
    }
  },
  // ! Login page route
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      requiresUnauth: true
    }
  },
  // ! Sign Up page route
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta: {
      requiresUnauth: true
    }
  },
  // ! Authorization page route
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../Auth.vue'),
    meta: {
      requiresUnauth: true
    }
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

  // ? Render the pages whether the user's logged in or not:
  if (requiresAuth && !isAuth) next('/login')
  else if (requiresUnauth && isAuth) next('/')
  else next()
})

export default router