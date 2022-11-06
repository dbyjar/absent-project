<template>
  <Box>
    <form @submit.prevent="onSubmit" class="form-horizontal form-material mx-2">
      <div class="form-group">
        <label>Name</label>
        <input
          type="text"
          class="form-control form-control-line"
          v-model="form.name"
        />
      </div>
      <div class="form-group">
        <label>Email</label>
        <input
          type="email"
          class="form-control form-control-line"
          v-model="form.email"
        />
      </div>
      <div class="form-group">
        <label>ID</label
        ><span class="text-black-50 ms-2">*nik/passport/etc.</span>
        <input
          type="text"
          class="form-control form-control-line"
          v-model="form.nik"
        />
      </div>
      <div class="form-group">
        <label class="col-sm-12">Role</label>
        <div class="col-sm-12">
          <select
            class="form-select shadow-none form-control-line"
            v-model="form.user_role_id"
          >
            <option
              v-for="role in roles"
              :key="role.id"
              :value="role.id"
              v-text="role.name"
            ></option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label>Phone</label>
        <input
          type="text"
          class="form-control form-control-line"
          v-model="form.phone"
        />
      </div>
      <div class="form-group">
        <label>Birthdate</label>
        <input
          type="date"
          class="form-control form-control-line"
          v-model="form.birthdate"
        />
      </div>
      <div class="form-group">
        <label class="col-sm-12">Job</label>
        <div class="col-sm-12">
          <select
            class="form-select shadow-none form-control-line"
            v-model="form.job_id"
          >
            <option
              v-for="job in jobs"
              :key="job.id"
              :value="job.id"
              v-text="job.name"
            ></option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label>Address</label>
        <textarea
          class="form-control"
          cols="30"
          rows="10"
          v-model="form.address"
        ></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-12 justify-content-end">
          <button class="btn btn-success text-white">Submit</button>
        </div>
      </div>
    </form>
  </Box>
</template>

<script>
export default {
  data: () => ({
    form: {},
    jobs: [],
    editId: null,
    roles: [
      {
        id: 1,
        name: "Admin",
      },
      {
        id: 2,
        name: "User",
      },
    ],
  }),
  mounted() {
    this.$route.params.id
      ? (this.editId = this.$route.params.id)
      : (this.editId = null);

    this.getDataJobs();
    this.setForm();
  },
  methods: {
    async setForm() {
      const { data } = this.editId ? await this.fetch() : {};
      console.log(data);
      this.form.name = data?.name;
      this.form.email = data?.email;
      this.form.birthdate = data?.birthdate;
      this.form.address = data?.address;
      this.form.phone = data?.phone;
      this.form.user_role_id = data?.user_role_id;
      this.form.nik = data?.nik;
      this.form.job_id = data?.job_id;

      this.$forceUpdate();
    },
    async fetch() {
      const { results } =
        (
          await axios.get(
            `/api/employee/${this.editId}`,
            this.$root.headersRequestAPI
          )
        ).data ?? {};

      return results;
    },
    async getDataJobs() {
      const { results } =
        (await axios.get("/api/job", this.$root.headersRequestAPI)).data ?? [];

      this.jobs = results.data;
    },
    async onSubmit() {
      if (!this.editId) {
        try {
          await axios.post(
            "/api/employee",
            this.form,
            this.$root.headersRequestAPI
          );

          this.$router.push({
            name: "users",
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          await axios.put(
            `/api/employee/${this.editId}`,
            {
              ...this.form,
              _method: "put",
            },
            this.$root.headersRequestAPI
          );

          this.$router.push({
            name: "users",
          });
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>