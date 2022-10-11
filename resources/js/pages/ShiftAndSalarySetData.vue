<template>
  <Box>
    <form @submit.prevent="onSubmit" class="form-horizontal form-material mx-2">
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control form-control-line" v-model="form.name">
      </div>
      <div class="form-group">
        <label>Time</label>
        <input type="time" class="form-control form-control-line" v-model="form.time">
      </div>
      <div class="form-group">
        <label>Price</label>
        <input type="number" class="form-control form-control-line" v-model="form.price">
      </div>
      <div class="form-group">
        <label class="col-sm-12">Job</label>
        <div class="col-sm-12">
          <select class="form-select shadow-none form-control-line"  v-model="form.job_id">
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
        <div class="col-sm-12 justify-content-end">
          <button class="btn btn-success text-white">Submit</button>
        </div>
      </div>
  </form>
  </Box>
</template>

<script>
export default {
  data:() => ({
    form: {},
    jobs: [],
    editId: null
  }),
  mounted() {
    this.$route.params.id
      ? this.editId = this.$route.params.id
      : this.editId = null

    this.getDataJobs()
    this.setForm()
  },
  methods: {
    async setForm() {
      const { data } = this.editId
        ? await this.fetch()
        : {}

      this.form.name = data?.name
      this.form.time = data?.time
      this.form.price = data?.price
      this.form.job_id = data?.job_id

      this.$forceUpdate()
    },
    async fetch() {
      const { results } = (
        await axios.get(
          `/api/shift_and_salary/${this.editId}`,
          this.$root.headersRequestAPI
        )
      ).data ?? []

      return results
    },
    async getDataJobs() {
      const { results } = (
        await axios.get(
          "/api/job",
          this.$root.headersRequestAPI
        )
      ).data ?? []

      this.jobs = results.data
    },
    async onSubmit() {
      if (!this.editId) {
        try {
          await axios.post(
            "/api/shift_and_salary",
            this.form,
            this.$root.headersRequestAPI
          )
    
          this.$router.push({
            name: "shift-and-salary"
          })
        } catch (error) {
          console.log(error)
        }
      } else {
        try {
          await axios.post(
            `/api/shift_and_salary/${this.editId}`, {
              ...this.form,
              _method: "put"
            },
            this.$root.headersRequestAPI
          )
    
          this.$router.push({
            name: "shift-and-salary"
          })
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
}
</script>