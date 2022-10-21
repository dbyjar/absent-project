<template>
  <StreamBarcodeReader
    @decode="onDecode"
    @loaded="onLoaded"
  ></StreamBarcodeReader>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
  components: { StreamBarcodeReader },
  methods: {
    onDecode() {
      this.$router.push({
        name: "absent",
        params: {
          query: {
            user: 1
          }
        }
      })
    },
    onLoaded() {
      return;
    },
  }
}
</script>