<template>
  <div>
    <Tools @click="showModalJob = true" />
    <Box>
      <BaseTable
        ref="table"
        :config="{
          namespace: 'job',
        }"
        :columns="columns"
        v-slot="{ rows }"
      >
        <base-table-row v-for="row in rows" :key="row.id">
          <base-table-column>{{
            formatDate(row.created_at)
          }}</base-table-column>
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

    <job-set-data-modal
      ref="jobModal"
      :value.sync="showModalJob"
      @action-done="$refs.table.fetchs()"
    />
  </div>
</template>

<script>
import JobSetDataModal from "@components/modal/JobSetDataModal.vue";

export default {
  components: { JobSetDataModal },
  data: () => ({
    showModalJob: false,
    columns: [
      {
        name: "created at",
        class: "",
      },
      {
        name: "name",
        class: "",
      },
    ],
  }),
  methods: {
    edit(id) {
      this.$refs.jobModal.editId = id;
      this.showModalJob = true;
    },
    async remove(id) {
      const swalWithBootstrapButtons = this.$swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });

      this.$swal({
        title: "Are you sure?",
        text: "will you remove this?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.delete(`/api/job/${id}`, this.$root.headersRequestAPI);

          this.$refs.table.fetchs();

          swalWithBootstrapButtons.fire(
            "Deleted!",
            "success deleted.",
            "success"
          );
        } else if (result.dismiss === this.$swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your data is safe :)",
            "error"
          );
        }
      });
    },
  },
};
</script>