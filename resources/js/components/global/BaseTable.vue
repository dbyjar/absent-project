<template>
  <!-- <div class="table" ref="table"> -->
    <table class="table mb-0 align-middle text-nowrap">
      <thead>
        <tr>
          <th class="border-top-0">Products</th>
          <th class="border-top-0">License</th>
          <th class="border-top-0">Support Agent</th>
          <th class="border-top-0">Technology</th>
          <th class="border-top-0">Tickets</th>
          <th class="border-top-0">Sales</th>
          <th class="border-top-0">Earnings</th>
          <th class="border-top-0">Opsi</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="d-flex align-items-center">
              <div class="me-3">
                <a class="btn btn-circle d-flex btn-info text-white">EA</a>
              </div>
              <div>
                <h4 class="m-b-0 font-16">Elite Admin</h4>
              </div>
            </div>
          </td>
          <td>Single Use</td>
          <td>John Doe</td>
          <td>
            <label class="badge bg-danger">Angular</label>
          </td>
          <td>46</td>
          <td>356</td>
          <td>
            <h5 class="m-b-0">Rp. 2.850.006</h5>
          </td>
          <td>
            <li class="dropdown">
              <a class="dropdown-toggle text-muted pro-pic" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                >
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="javascript:void(0)">
                  <i class="ti-user m-r-5 m-l-5"></i> My Profile
                </a>
                <a class="dropdown-item" href="javascript:void(0)">
                  <i class="ti-wallet m-r-5 m-l-5"></i> My Balance
                </a>
                <a class="dropdown-item" href="javascript:void(0)">
                  <i class="ti-email m-r-5 m-l-5"></i> Inbox
                </a>
              </ul>
            </li>
          </td>
        </tr>
      </tbody>
    </table>
  <!-- </div> -->
</template>

<script>
export default {

}
</script>

<style scoped>
.table-responsive {
  min-height: 100vh;
}
</style>