import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
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
]

export const router = new VueRouter({
  mode: "history",
  routes
});