<template>
  <BaseModal ref="bsModal">
    <template #title>{{ "Filter Data Attendance" }}</template>

    <template #body>
      <form class="form-horizontal form-material mx-2">
        <div class="form-group" v-if="$root.auth.user_role_id === 1">
          <select v-model="form.employee_id" class="form-select shadow-none form-control-line">
            <option
              v-for="employee in employees"
              :key="employee.id"
              :value="employee.id"
              v-text="employee.name"
            ></option>
          </select>
        </div>
        <div class="form-group">
          <label>From Date</label>
          <input type="date" class="form-control form-control-line" v-model="form.from_date">
        </div>
        <div class="form-group">
          <label>To Date</label>
          <input type="date" class="form-control form-control-line" v-model="form.to_date">
        </div>
      </form>
    </template>

    <template #footer>
      <div class="text-right">
        <button 
          type="button"
          class="btn btn-sm btn-danger text-white me-1"
          @click="onFilterSubmit(true)"
        >
          Reset
        </button>
        <button type="submit" class="btn btn-sm btn-primary" @click="onFilterSubmit">Filter</button>
      </div>
    </template>
  </BaseModal>
</template>

<script>
import { bsModalComponentOptions } from '@/mixins'

export default {
  mixins: [bsModalComponentOptions("bsModal")],
  data:() => ({
    form: {},
    employees: []
  }),
  mounted() {
    this.getEmployees()
  },
  methods: {
    async getEmployees() {
      const { results } = (
        await axios.get(`/api/employee`, this.$root.headersRequestAPI)
      ).data ?? []

      this.employees = results.data
    }, 
    onFilterSubmit(reset) {
      if (reset === true) this.form = {}
      
      this.$emit("filter-update", this.form)
      this.$refs.bsModal.hide()
    }
  },
}
</script>