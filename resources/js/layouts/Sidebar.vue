<template>
  <aside class="left-sidebar" data-sidebarbg="skin6">
    <div class="scroll-sidebar">
      <nav class="sidebar-nav mt-5">
        <ul id="sidebarnav">
          <li class="sidebar-item">
            <a
              class="sidebar-link waves-effect waves-dark sidebar-link"
              href="/"
              aria-expanded="false"
            >
              <i class="mdi mdi-view-dashboard"></i>
              <span class="hide-menu">Dashboard</span>
            </a>
          </li>
          <li class="sidebar-item">
            <a
              class="sidebar-link waves-effect waves-dark sidebar-link"
              href="/hello"
              aria-expanded="false"
            >
              <i class="mdi mdi-account"></i>
              <span class="hide-menu">Absent</span>
            </a>
          </li>
          <li class="text-center p-40 upgrade-btn">
            <a
              href="/"
              class="btn d-block w-100 btn-danger text-white" target="_blank"
            >
                <i class="mdi mdi-arrow-left-bold"></i>
                Logout
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>