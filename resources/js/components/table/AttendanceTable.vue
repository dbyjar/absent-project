<template>
  <BaseTable
    ref="table"
    :config="config"
    :columns="columns"
    v-slot="{ rows }"
    withoutOptionColumn
  >
    <base-table-row v-for="row in rows" :key="row.id">
      <base-table-column>{{ row.user?.name }}</base-table-column>
      <base-table-column>{{ row.punch_in }}</base-table-column>
      <base-table-column>{{ row.shift_and_salary?.name }}</base-table-column>
      <base-table-column>{{ row.shift_and_salary?.price }}</base-table-column>
    </base-table-row>
  </BaseTable>
</template>

<script>
export default {
  data: () => ({
    config: {
      namespace: "attendance"
    },
    columns: [
      {
        name: "employee",
        class: "",
      },
      {
        name: "punch in",
        class: "",
      },
      {
        name: "shift",
        class: "",
      },
      {
        name: "price",
        class: "",
      },
    ]
  }),
  methods: {
    async remove(id) {
      await axios.delete(
        `/api/attendance/${id}`,
        this.$root.headersRequestAPI
      )

      this.$refs.table.fetchs()
    },
    handleFilter(data) {
      this.config = {
        ...this.config,
        params: {
          ...data
        }
      }

      this.$nextTick(() => {
        this.$refs.table.fetchs()
      })
    }
  },
}
</script>