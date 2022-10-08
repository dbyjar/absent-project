<template>
  <div>
    <div class="d-md-flex">
      <div class="d-flex align-items-center">
        <span>limit: </span>
        <select class="ms-2" v-model="options.limit" @change="handleFilter">
          <option
            v-for="i in 3"
            :key="i"
            v-text="i < 2 ? 25 : 25 * (i - 1) * 2"
          ></option>
        </select>
      </div>
      <div class="ms-auto">
        <input
          type="text"
          class="form-control shadow-none"
          placeholder="Search ..."
          v-model="options.search"
          @keyup="handleFilter"
        >
      </div>
    </div>
    <div class="double-scroll">
      <div class="base-table">
        <base-table-row head>
          <base-table-column
            v-for="(column, index) in tableColumns"
            :key="index"
            :class="column.class"
          >
            {{ column.name }}
          </base-table-column>
        </base-table-row>

        <div v-if="table.data.length && !isLoading">
          <slot v-if="table.data" v-bind:rows="table.data"></slot>
        </div>

        <div class="text-center p-3" v-else-if="isLoading">
          <i class="fas fa-spin fa-spinner fa-fw"></i> loading ...
        </div>

        <div v-else-if="!table.data.length && !isLoading">
          <base-table-column>data not found</base-table-column>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-between">
      <div>
        <span class="fw-bold">total: </span>
        {{ table.total }}
      </div>
      <div v-if="table.last_page">
        <paginate
          v-model="options.page"
          :page-count="table.last_page"
          :prev-text="'&laquo;'"
          :next-text="'&raquo;'"
          :container-class="'pagination'"
          :page-class="'page-item'"
          :page-link-class="'page-link'"
          :prev-class="'page-item'"
          :prev-link-class="'page-link'"
          :next-class="'page-item'"
          :next-link-class="'page-link'"
          :click-handler="handleFilter"
        ></paginate>
      </div>
    </div>
  </div>
</template>

<script>
import Paginate from 'vuejs-paginate'

export default {
  components: { Paginate },
  props: {
    withoutOptionColumn: {
      type: Boolean,
      default: false
    },
    config: {
      type: Object,
      default: () => {}
    },
    columns: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    isLoading: false,
    timeOut: undefined,
    tableColumns: [],
    table: {
      data: [],
    },
    options: {
      page: 1,
      limit: 25,
      search: "",
    }
  }),
  mounted() {
    this.appendColumns()
    this.fetchs()
  },
  methods: {
    async fetchs() {
      this.isLoading = true
      const params = $.param({
        ...this.config.params,
        ...this.options,
      })
      
      try {
        const { results } = (
          await axios.get(`/api/${this.config.namespace}?${params}`)
        ).data ?? {}

        this.table = results
      } catch (error) {
        this.table = {}
      }

      this.isLoading = false
    },
    appendColumns() {
      this.tableColumns = [...(this.columns ?? [])]

      if (!this.withoutOptionColumn) {
        const optionsColumn = {
          name: "action",
          class: "text-end"
        }

        this.tableColumns.push(optionsColumn)
      }

      this.$forceUpdate()
    },
    handleFilter() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.fetchs()
      }, 300);
    }
  }
}
</script>