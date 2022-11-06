import Vue from "vue";
import VueRouter from "vue-router";
import Cookies from 'js-cookie'
import { getDeviceType } from '../helpers'

Vue.use(VueRouter)

const routes = [
  {
    path: "*",
    name: "notFound",
    component: () => import('@pages/404.vue'),
    meta: {
      pageAct: "",
      menuTranslate: "notFound",
      origin: "notFound"
    }
  },
  {
    name: 'dashboard',
    path: '/',
    component: () => import('@pages/Dashboard.vue'),
    meta: {
      pageAct: "",
      menuTranslate: "dashboard",
      origin: "dashboard"
    }
  },
  {
    name: 'absent',
    path: '/absent',
    component: () => import('@pages/Absent.vue'),
    meta: {
      pageAct: "",
      menuTranslate: "absent",
      origin: "absent"
    }
  },
  {
    name: 'login',
    path: '/bajksdkajks',
    component: () => import('@pages/Login.vue'),
    meta: {
      pageAct: "",
      menuTranslate: "login",
      origin: "login"
    }
  },
  {
    name: 'scanQRCode',
    path: '/bkjanskjhaj',
    component: () => import('@pages/ScanQRCode.vue'),
    meta: {
      pageAct: "",
      menuTranslate: "scan QR code",
      origin: "scanQRCode"
    }
  },
  {
    name: 'profile',
    path: '/bkajbshkaj',
    component: () => import('@pages/Profile.vue'),
    meta: {
      pageAct: "",
      menuTranslate: "profile",
      origin: "profile"
    }
  },
  {
    name: 'users',
    path: '/iuejrnakskda',
    component: () => import('@pages/Users.vue'),
    meta: {
      pageAct: "",
      menuTranslate: "users",
      origin: "users"
    }
  },
  {
    name: 'user-create',
    path: '/iuejrnakskda/create',
    component: () => import('@pages/UserSetData.vue'),
    meta: {
      pageAct: "create",
      menuTranslate: "user",
      origin: "users"
    }
  },
  {
    name: 'user-edit',
    path: '/iuejrnakskda/edit/:id',
    component: () => import('@pages/UserSetData.vue'),
    meta: {
      pageAct: "edit",
      menuTranslate: "user",
      origin: "users"
    }
  },
  {
    name: 'user-detail',
    path: '/iuejrnakskda/detail/:id',
    component: () => import('@pages/UserDetail.vue'),
    meta: {
      pageAct: "detail",
      menuTranslate: "user",
      origin: "users"
    }
  },
  {
    name: 'jobs',
    path: '/bakjhrie',
    component: () => import('@pages/Jobs.vue'),
    meta: {
      pageAct: "",
      menuTranslate: "jobs",
      origin: "jobs"
    }
  },
  {
    name: 'shift-and-salary',
    path: '/bciwjebijw',
    component: () => import('@pages/ShiftAndSalary.vue'),
    meta: {
      pageAct: "",
      menuTranslate: "shift and salary",
      origin: "shift-and-salary"
    }
  },
  {
    name: 'shift-and-salary-create',
    path: '/bciwjebijw/create',
    component: () => import('@pages/ShiftAndSalarySetData.vue'),
    meta: {
      pageAct: "create",
      menuTranslate: "shift and salary",
      origin: "shift-and-salary"
    }
  },
  {
    name: 'shift-and-salary-edit',
    path: '/bciwjebijw/edit/:id',
    component: () => import('@pages/ShiftAndSalarySetData.vue'),
    meta: {
      pageAct: "edit",
      menuTranslate: "shift and salary",
      origin: "shift-and-salary"
    }
  },
  {
    name: 'attendance',
    path: '/bdkjhfaisue',
    component: () => import('@pages/Attendance.vue'),
    meta: {
      pageAct: "",
      menuTranslate: "attendance",
      origin: "attendance"
    }
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