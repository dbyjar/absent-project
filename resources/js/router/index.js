import Vue from "vue";
import VueRouter from "vue-router";

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

export const router = new VueRouter({
  mode: "history",
  routes,
});