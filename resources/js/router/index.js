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
    name: 'hello',
    path: '/hello',
    component: () => import('@pages/Hello.vue')
  },
]

export const router = new VueRouter({
  mode: "history",
  routes
});