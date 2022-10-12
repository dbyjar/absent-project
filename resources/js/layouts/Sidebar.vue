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
  data: () => ({
    listMenu: [
      {
        name: "dashboard",
        routeName: "dashboard",
        icon: "mdi mdi-view-dashboard",
      },
      {
        name: "users",
        routeName: "users",
        icon: "mdi mdi-account-multiple",
      },
      {
        name: "jobs",
        routeName: "jobs",
        icon: "mdi mdi-account-star-variant",
      },
      {
        name: "attendance",
        routeName: "attendance",
        icon: "mdi mdi-account-network",
      },
      {
        name: "shift & salary",
        routeName: "shift-and-salary",
        icon: "mdi mdi-clock-end",
      },
    ]
  }),
}
</script>