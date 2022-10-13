<template>
  <BaseTable
    ref="table"
    :config="{
      namespace: 'attendance',
    }"
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
    }
  }
}
</script>