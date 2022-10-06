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