<template>
  <div>
    <Tools @click="$router.push({
      name: 'shift-and-salary-create'
    })" />
    <div class="row">
      <div class="col-lg-12">
        <Box>
          <BaseTable
            ref="table"
            :config="{
              namespace: 'shift_and_salary',
            }"
            :columns="columns"
            v-slot="{ rows }"
          >
            <base-table-row v-for="row in rows" :key="row.id">
              <base-table-column>{{ formatDate(row.created_at) }}</base-table-column>
              <base-table-column>{{ row.name }}</base-table-column>
              <base-table-column>{{ row.job?.name }}</base-table-column>
              <base-table-column>{{ row.time }}</base-table-column>
              <base-table-column>{{ row.price }}</base-table-column>
              <base-table-column class="text-end" overflow-visible>
                <action-tool
                  withoutDetail
                  @remove="remove(row.id)"
                  @edit="$router.push({
                    name: 'shift-and-salary-edit',
                    params: {
                      id: row.id
                    }
                  })"
                ></action-tool>
              </base-table-column>
            </base-table-row>
          </BaseTable>
        </Box>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    columns: [
      {
        name: "created at",
        class: "",
      },
      {
        name: "name",
        class: "",
      },
      {
        name: "job",
        class: "",
      },
      {
        name: "time",
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
        `/api/shift_and_salary/${id}`,
        this.$root.headersRequestAPI
      )

      this.$refs.table.fetchs()
    }
  }
}
</script>