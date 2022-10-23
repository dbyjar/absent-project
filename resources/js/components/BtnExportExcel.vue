<template>
  <export-excel
    :data="data"
    :name="filename"
    :fields="fields"
    class="btn btn-success"
  >
    <i class="fas fa-fw fa-file-excel"></i> Export
  </export-excel>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
    fields: {
      type: Object,
      required: true,
    },
    model: {
      type: String,
      required: true
    }
  },
  computed: {
    filename() {
      return `${this.model}-${new Date()}.xls`
    }
  },
}
</script>