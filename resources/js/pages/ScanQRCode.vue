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
    onDecode(val) {
      console.log("decode: ", val)
    },
    onLoaded(val) {
      console.log("laoded: ", val)
    },
  }
}
</script>