<template>
  <div id="main-wrapper">
    <div class="d-flex justify-content-center align-items-center">
      <Box
        class="box-login"
        :title="'log in'"
        :subtitle="'login for access menu'"
      >
        <form>
          <div class="mb-3">
            <label class="form-label">Email address</label>
            <input type="email" class="form-control" v-model="form.email">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" v-model="form.password">
            <small class="text-danger mt-2">{{ errors }}</small>
          </div>
          <button class="btn btn-primary" :disabled="loading" @click.prevent="onSubmit">
            Log in
          </button>
        </form>
      </Box>
    </div>
  </div>
</template>

<script>
export default {
  data:() =>({
    form: {},
    loading: false,
    errors: null
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
        console.log(error.response)
        this.errors = error.response.data.message
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