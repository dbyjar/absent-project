<template>
  <div class="card-body">
    <div class="d-flex mb-3 justify-content-center">
      <div id="camera"></div>
      <div id="result" v-if="base64URI">
        <img :src="base64URI" alt="absent">
      </div>
    </div>
    <button
      v-if="!result"
      type="button"
      class="btn btn-sm btn-primary"
      @click="onCameraSnap"
    >
      Snap Camera
    </button>
  </div>
</template>

<script>
import Webcam from 'webcamjs'

export default {
  props: {
    width: {
      type: Number,
      default: 320,
    },
    height: {
      type: Number,
      default: 240,
    },
  },
  created() {
    Webcam.set({
      width: this.width,
      height: this.height,
      flip_horiz: true,
    });
  },
  data:() => ({
    result: false,
    base64URI: '',
  }),
  mounted() {
    this.$nextTick(() => {
      Webcam.attach('#camera');
    })
  },
  methods: {
    async onCameraSnap() {
      let base64URI
      this.result = true

      Webcam.snap(data_uri => base64URI = data_uri);

      this.base64URI = base64URI
      this.$emit("snap", this.base64URI)
    }
  },
  destroyed() {
    Webcam.reset();
  }
}
</script>
