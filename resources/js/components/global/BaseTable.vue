<template>
  <div class="double-scroll">
    <div class="base-table">
      <base-table-row head>
        <base-table-column>created at</base-table-column>
        <base-table-column>name</base-table-column>
        <base-table-column>opsi</base-table-column>
      </base-table-row>
      <base-table-row>
        <base-table-column>05/10/2022</base-table-column>
        <base-table-column>Fajar Al Hakim</base-table-column>
        <base-table-column overflow-visible>
          <div class="dropdown">
            <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fa fa-fw fas-arrow-down-alt"></i>
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </base-table-column>
      </base-table-row>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>