<template>
  <aside class="left-sidebar" data-sidebarbg="skin6">
    <div class="scroll-sidebar">
      <nav class="sidebar-nav mt-3">
        <ul id="sidebarnav">
          <li
            :class="['sidebar-item', { 'selected': $route.name === menu.routeName }]"
            v-for="(menu, i) in listMenu"
            :key="i"
          >
            <a
              href="javascript:;"
              class="sidebar-link waves-effect waves-dark sidebar-link"
              @click="$router.push({ name: menu.routeName })"
              v-if="secureIsOn(menu)"
            >
              <i :class="menu.icon"></i>
              <span class="hide-menu text-capitalize">{{ menu.name }}</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
export default {
  computed: {
    secureIsOn() {
      return menu => {
        if (menu.secure === true) {
          return this.$root.auth.user_role_id === 1
        } else {
          return true
        }
      }
    }
  },
  data: () => ({
    listMenu: [
      {
        name: "dashboard",
        routeName: "dashboard",
        icon: "mdi mdi-view-dashboard",
        secure: false
      },
      {
        name: "users",
        routeName: "users",
        icon: "mdi mdi-account-multiple",
        secure: true
      },
      {
        name: "jobs",
        routeName: "jobs",
        icon: "mdi mdi-account-star-variant",
        secure: true
      },
      {
        name: "attendance",
        routeName: "attendance",
        icon: "mdi mdi-account-network",
        secure: true
      },
      {
        name: "shift & salary",
        routeName: "shift-and-salary",
        icon: "mdi mdi-clock-end",
        secure: true
      },
    ]
  }),
}
</script>