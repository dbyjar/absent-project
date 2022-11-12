<template>
  <div>
    <Box>
      <table>
        <tr>
          <th>Nama</th>
          <th>:</th>
          <td>{{ user.name }}</td>
        </tr>
        <tr>
          <th>Email</th>
          <th>:</th>
          <td>{{ user.email }}</td>
        </tr>
        <tr>
          <th>ID</th>
          <th>:</th>
          <td>{{ user.nik }}</td>
        </tr>
        <tr>
          <th>Birthdate</th>
          <th>:</th>
          <td>{{ user.birthdate }}</td>
        </tr>
        <tr>
          <th>phone</th>
          <th>:</th>
          <td>{{ user.phone }}</td>
        </tr>
        <tr>
          <th>Role</th>
          <th>:</th>
          <td>{{ user.user_role.name }}</td>
        </tr>
        <tr>
          <th>Job</th>
          <th>:</th>
          <td>{{ user.job.name }}</td>
        </tr>
        <tr>
          <th>Address</th>
          <th>:</th>
          <td>{{ user.address }}</td>
        </tr>
      </table>
    </Box>
    <div class="row">
      <div class="col-lg-12">
        <Box :title="'Attendance'">
          <BaseTable
            ref="table"
            :config="{
              namespace: 'attendance',
              params: {
                employee_id: $root.auth.id,
              },
            }"
            :columns="columns"
            v-slot="{ rows }"
            withoutOptionColumn
          >
            <base-table-row v-for="row in rows" :key="row.id">
              <base-table-column>{{ row.punch_in }}</base-table-column>
              <base-table-column>{{
                row.shift_and_salary?.name
              }}</base-table-column>
              <base-table-column>{{
                row.shift_and_salary?.price
              }}</base-table-column>
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
    user: {},
    columns: [
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
    ],
  }),
  async mounted() {
    const { results } =
      (
        await axios.get(
          `/api/employee/${this.$root.auth.id}`,
          this.$root.headersRequestAPI
        )
      ).data ?? {};

    this.user = results.data;
  },
};
</script>