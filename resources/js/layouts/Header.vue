<template>
  <header class="topbar" data-navbarbg="skin6">
    <nav class="navbar top-navbar navbar-expand-md navbar-light">
      <div class="navbar-header" data-logobg="skin6">
        <a class="navbar-brand" href="/">
          <b class="logo-icon">
            <img src="@assets/images/logo-icon.png" alt="homepage" class="dark-logo" />
          </b>
        </a>
      </div>
      
      <div class="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
        <ul class="navbar-nav float-start me-auto"><!-- left header --></ul>
        <ul class="navbar-nav float-end">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-muted pro-pic" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <span class="text-capitalize fs-6 me-3">{{ user.name }}</span>
              <img src="@assets/images/users/1.jpg" alt="user" class="rounded-circle" width="31">
            </a>
            <ul class="dropdown-menu dropdown-menu-end animated" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="javascript:void(0)">
                <i class="far fa-fw fa-id-badge"></i> My Profile
              </a>
              <button class="dropdown-item" @click="onLogoutClick">
                <i class="fas fa-fw fa-hand-point-left"></i> Logout
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