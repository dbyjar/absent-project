<template>
  <StreamBarcodeReader
    @decode="onDecode"
    @loaded="onLoaded"
  ></StreamBarcodeReader>
</template>

<script>
import Pusher from 'pusher-js';
import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
  components: { StreamBarcodeReader },
  data:() => ({
    pusher: new Pusher('a8fc0c595a781be86e6b', {
      cluster: 'ap1'
    })
  }),
  mounted() {
    let channel = this.pusher.subscribe(`scan-absent`)
    channel.bind(".scan-absent-done", (val) => {
      console.log("pusher: ", val)
    })
  },
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