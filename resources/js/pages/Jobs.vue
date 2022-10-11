<template>
  <div>
    <Tools @click="$router.push({
      name: 'jobs-create'
    })" />
    <div class="row">
      <div class="col-lg-12">
        <Box>
          <BaseTable
            :config="{
              namespace: 'job',
            }"
            :columns="columns"
            v-slot="{ rows }"
          >
            <base-table-row v-for="row in rows" :key="row.id">
              <base-table-column>{{ formatDate(row.created_at) }}</base-table-column>
              <base-table-column>{{ row.name }}</base-table-column>
              <base-table-column class="text-end" overflow-visible>
                <action-tool
                  @edit="edit(row.id)"
                  @remove="remove(row.id)"
                  withoutDetail
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
    ]
  }),
}
</script>