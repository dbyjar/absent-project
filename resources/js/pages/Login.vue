<template>
  <div class="d-flex justify-content-center align-items-center mt-5">
    <Box
      class="box-login mt-5"
      :title="'log in'"
      :subtitle="'login for access menu'"
    >
      <form>
        <div class="mb-3">
          <label class="form-label">Email address</label>
          <input type="email" class="form-control" v-model="form.email">
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          <invalid-feedback :errors="errors" key-error="email" />
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input type="password" class="form-control" v-model="form.password">
          <invalid-feedback :errors="errors" key-error="password" />
        </div>
        <div class="mb-3"><invalid-feedback :errors="errors" key-error="failed" /></div>
        <button class="btn btn-primary mt-3" :disabled="loading" @click.prevent="onSubmit">
          Log in
        </button>
      </form>
    </Box>
  </div>
</template>

<script>
export default {
  data:() =>({
    form: {},
    loading: false,
    errors: {}
  }),
  methods: {
    async onSubmit() {
      this.loading = true
      
      try {
        const { data } = await axios.post(`/api/login`, this.form)
        
        localStorage.setItem("tokenEmployeeAbsent", data.token)
        this.$router.push({
          name: 'dashboard'
        })
      } catch (error) {
        this.errors = error.response.data.results.message
        this.loading = false
      }

      this.loading = false
    }
  }
}
</script>

<style scoped>
.box-login {
  max-width: 875px;
}
</style>