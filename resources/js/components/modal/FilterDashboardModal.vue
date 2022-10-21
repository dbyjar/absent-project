<template>
  <BaseModal ref="bsModal">
    <template #title>{{ "Filter Data Attendance" }}</template>

    <template #body>
      <form class="form-horizontal form-material mx-2">
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
  }),
  methods: {
    onFilterSubmit() {
      this.$emit("filter-update", this.form)
      this.$refs.bsModal.hide()
    }
  },
}
</script>