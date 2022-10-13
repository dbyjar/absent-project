<template>
  <div class="card-body d-flex flex-column justify-content-center">
    <div>
      <span class="me-2">
        <small class="text-muted">Name: </small>
        <h6 class="d-inline-block">{{ user.name }}</h6>,
      </span>
      <span>
        <small class="text-muted">Job: </small>
        <h6 class="d-inline-block">{{ user.job.name }}</h6>
      </span>
    </div>
    <div class="d-flex mb-3 justify-content-center">
      <div id="camera" ref="camera"></div>
      <div id="result" v-if="base64URI">
        <img class="result" :src="base64URI" alt="absent">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <select v-model="form.shift_id" class="form-select shadow-none form-control-line">
          <option
            v-for="shift in shiftByJob"
            :key="shift.id"
            :value="shift.id"
            v-text="shift.name"
          ></option>
        </select>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <button
        v-if="!result"
        type="button"
        class="btn btn-sm btn-secondary"
        @click="onCameraSnap"
      >
        <i class="mdi mdi-camera-iris"></i> Snap camera
      </button>
      <span class="text-center text-capitalize fw-bold mt-1" v-else>
        <i class="mdi mdi-account-check"></i> Success scan
      </span>
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
    user: {
      type: Object,
      required: true
    }
  },
  created() {
    Webcam.set({
      width: this.width,
      height: this.height,
      flip_horiz: true,
    });
  },
  data:() => ({
    form: {},
    result: false,
    shiftByJob: [],
    base64URI: ""
  }),
  mounted() {
    this.$nextTick(() => {
      Webcam.attach('#camera');
      $("video").css("borderRadius", "15px")
    })
  },
  methods: {
    async getShiftByJob() {
      const { results } = (
        await axios.get(`/api/shift_select?by_job_id=${this.user.job_id}`)
      ).data ?? {}

      this.shiftByJob = results.data

      if (this.shiftByJob.length) {
        this.form.shift_id = this.shiftByJob[0].id
      }
    },
    async onCameraSnap() {
      let base64URI
      this.result = true

      Webcam.snap(data_uri => base64URI = data_uri);
      this.destroyCamera()

      this.base64URI = base64URI
      this.form = {
        image: base64URI,
        ...this.form
      }

      this.$emit("snap", this.form)
    },
    destroyCamera() {
      Webcam.reset();
      $(this.$refs.camera).css("display", "none") // make display none
    }
  },
  destroyed() {
    this.destroyCamera()
  },
  watch: {
    user: {
      immediate: true,
      async handler(val) {
        if (val.id) await this.getShiftByJob()
      }
    }
  }
}
</script>

<style scoped>
.result {
  border-radius: 15px;
}
</style>
