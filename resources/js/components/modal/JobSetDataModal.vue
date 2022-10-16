<template>
  <BaseModal ref="bsModal">
    <template #title>{{ title }}</template>

    <template #body>
      <form class="form-horizontal form-material mx-2">
        <div class="form-group">
          <label>Name</label>
          <input type="text" class="form-control form-control-line" v-model="form.name">
        </div>
      </form>
    </template>

    <template #footer>
      <div class="text-right">
        <button type="submit" class="btn btn-sm btn-primary" @click="submit">Submit</button>
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
    title: "",
    editId: null,
  }),
  methods: {
    setForm(data = {}) {
      this.form.name = data?.name

      this.$refs.bsModal.$forceUpdate()
    },
    async fetch(id) {
      const { results } = (
        await axios.get(`/api/job/${id}`, this.$root.headersRequestAPI)
      ).data ?? {}

      return results
    },
    async submit() {
      if (!this.editId) {
        await axios.post(
          "/api/job",
          this.form,
          this.$root.headersRequestAPI
        )

        this.$emit("action-done")
        this.$refs.bsModal.hide()
      } else {
        await axios.post(
          `/api/job/${this.editId}`,
          {
            ...this.form,
            _method: "put"
          },
          this.$root.headersRequestAPI
        )

        this.$emit("action-done")
        this.$refs.bsModal.hide()
      }
    }
  },
  watch: {
    editId: {
      immediate: true,
      deep: true,
      async handler(val) {
        this.form = {};
        this.editId = val;
        this.editId ? this.title = "Edit Data" : this.title = "Add Data"

        if (val) {
          const data = await this.fetch(this.editId);
          this.setForm(data);
        }
      }
    },
  }
}
</script>