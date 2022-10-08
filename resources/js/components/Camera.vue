<template>
  <div class="card-body d-flex flex-column justify-content-center">
    <div class="d-flex mb-3 justify-content-center">
      <div id="camera" ref="camera"></div>
      <div id="result" v-if="base64URI">
        <img class="result" :src="base64URI" alt="absent">
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <button
        v-if="!result"
        type="button"
        class="btn btn-sm btn-secondary"
        @click="onCameraSnap"
      >
        Click for Save
      </button>
    </div>
  </div>
</template>

<script>
import Webcam from 'webcamjs'

export default {
  props: {
    width: {
      type: Number,
      default: 560,
    },
    height: {
      type: Number,
      default: 420,
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
      $("video").css("borderRadius", "15px")
    })
  },
  methods: {
    async onCameraSnap() {
      let base64URI
      this.result = true

      Webcam.snap(data_uri => base64URI = data_uri);
      this.resetCam()

      this.base64URI = base64URI
      this.$emit("snap", this.base64URI)
    },
    resetCam() {
      Webcam.reset();
      $(this.$refs.camera).css("display", "none") // make display none
    }
  },
  destroyed() {
    this.resetCam()
  }
}
</script>

<style scoped>
.result {
  border-radius: 15px;
}
</style>
