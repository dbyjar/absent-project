<template>
  <div>
    <Tools
      @click="
        $router.push({
          name: 'user-create',
        })
      "
    />
    <div class="row">
      <div class="col-lg-12">
        <Box>
          <BaseTable
            ref="table"
            :config="{
              namespace: 'employee',
              params: {
                user_id: 1,
              },
            }"
            :columns="columns"
            v-slot="{ rows }"
          >
            <base-table-row v-for="row in rows" :key="row.id">
              <base-table-column>{{
                formatDate(row.created_at)
              }}</base-table-column>
              <base-table-column>{{ row.name }}</base-table-column>
              <base-table-column>{{ row.email }}</base-table-column>
              <base-table-column>{{ row.user_role.name }}</base-table-column>
              <base-table-column class="text-end" overflow-visible>
                <action-tool
                  @edit="edit(row.id)"
                  @remove="remove(row.id)"
                  @detail="detail(row.id)"
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
        name: "email",
        class: "",
      },
      {
        name: "role",
        class: "",
      },
    ],
  }),
  methods: {
    edit(id) {
      this.$router.push({
        name: "user-edit",
        params: { id },
      });
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
          await axios.delete(
            `/api/employee/${id}`,
            this.$root.headersRequestAPI
          );

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
    async detail(id) {
      this.$router.push({
        name: "user-detail",
        params: { id },
      });
    },
  },
};
</script>