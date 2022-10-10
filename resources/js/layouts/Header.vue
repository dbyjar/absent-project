<template>
  <header class="topbar" data-navbarbg="skin6">
    <nav class="navbar top-navbar navbar-expand-md navbar-light">
      <div class="navbar-header" data-logobg="skin6">
        <a class="navbar-brand" href="javascript:;">
          <b class="logo-icon">
            <img src="@assets/images/logo-icon.png" alt="homepage" class="dark-logo" />
          </b>
        </a>
        <a
          class="nav-toggler waves-effect waves-light d-block d-md-none"
          href="javascript:void(0)"
        >
          <i class="mdi mdi-menu"></i>
        </a>
      </div>
      
      <div class="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
        <ul class="navbar-nav float-start me-auto"><!-- left side of header --></ul>
        <ul class="navbar-nav float-end">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-muted pro-pic" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <span class="text-capitalize fs-6 me-3">{{ user?.name }}</span>
              <img src="@assets/images/users/d3.jpg" alt="user" class="rounded-circle" width="31">
            </a>
            <ul class="dropdown-menu dropdown-menu-end animated" aria-labelledby="navbarDropdown">
              <a href="javascript:;" class="dropdown-item" @click="$router.push({ name: 'profile' })">
                <i class="mdi mdi-account"></i> My Profile
              </a>
              <button class="dropdown-item" @click="onLogoutClick">
                <i class="mdi mdi-logout"></i> Logout
              </button>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  computed: {
    user() {
      return this.$root.auth
    }
  },
  methods: {
    async onLogoutClick() {
      const token = Cookies.get("absentSession")

      await axios.post(`/api/logout`, { token })

      Cookies.remove("absentSession")
      this.$router.push({
        name: "login"
      })
    }
  }
}
</script>