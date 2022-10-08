import Vue from "vue";
import VueRouter from "vue-router";
import Cookies from 'js-cookie'
import { getDeviceType } from '../helpers'

Vue.use(VueRouter)

const routes = [
  {
    path: "*",
    name: "notFound",
    component: () => import('@pages/404.vue')
  },
  {
    name: 'dashboard',
    path: '/',
    component: () => import('@pages/Dashboard.vue')
  },
  {
    name: 'absent',
    path: '/absent',
    component: () => import('@pages/Absent.vue')
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@pages/Login.vue')
  },
]

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  const deviceType = getDeviceType()
  const isAuthenticated = Cookies.get("absentSession") ?? null

  if (to.name === "notFound") return next()

  if (to.name === 'login' || to.name === 'absent') {
    if (to.name === 'login' && isAuthenticated) {
      return next({ name: 'dashboard' })
    }

    if (to.name === 'absent') {
      if (deviceType !== "desktop") {
        return next({ name: "notFound" })
      }

      return next()
    }

    return next()
  } else if (!isAuthenticated) {
    return next({ name: 'login' })
  } else {
    return next()
  }
})

export default router