<template>
  <div>
    <Tools @click="showModalAdd = true" />
    <!-- <Tools withoutDefaultButton>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal">
        Launch demo modal
      </button>
    </Tools> -->
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

    <job-set-data-modal :value.sync="showModalAdd" />
  </div>
</template>

<script>
import JobSetDataModal from '@components/modal/JobSetDataModal.vue'

export default {
  components: { JobSetDataModal },
  data: () => ({
    showModalAdd: false,
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
  methods: {
    onShowModalAddClick() {
      this.showModalAdd = true
      this.$forceUpdate()
      // this.$router.push({ name: 'jobs-create' })
    }
  }
}
</script>