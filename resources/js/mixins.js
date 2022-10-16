import moment from "moment"

export const global = {
  methods: {
    formatDate(val) {
      if (!val) return;

      const result = moment(val).format("DD-MM-YYYY");
      return result
    }
  }
}


/** 
 * @param bsModalRef
 */
export const bsModalComponentOptions = bsModalRef => ({
  props: {
    value: false
  },
  mounted() {
    this.$refs[bsModalRef]?.$on("hide", () => {
      this.editId = null;
      this.$emit("update:value", false);
    });
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        if (val) {
          this.$refs[bsModalRef]?.show()
        } else {
          this.$refs[bsModalRef]?.hide()
        }
      }
    }
  }
})