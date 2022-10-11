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
  mounted() {
    let channel = this.$root.pusher.subscribe(`scan-absent`)
    channel.bind(".scan-absent-done", (val) => {
      console.log("pusher: ", val)
    })
  },
  methods: {
    onDecode(val) {
      if (val === "hi, iam jar") {
        console.log("decode: ", this.$root.auth)
      }
    },
    onLoaded() {
      return;
    },
  }
}
</script>