<template>
    <Box
        :title="'Absent'"
        :subtitle="'Absent with QR Code and WebCam here'"
    >
        <div class="d-flex justify-content-around">
            <div v-if="!user.id">
                <div class="card-body d-flex flex-column">
                    <img class="result" src="@assets/images/qrcode.png" alt="qrcode">
                    <span class="text-center text-capitalize fw-bold mt-3">
                        <i class="mdi mdi-qrcode-scan"></i> Scan me
                    </span>
                </div>
            </div>
            <div v-else>
                <camera ref="camera" :user="user" @snap="onCameraSnap" />
            </div>
        </div>
    </Box>
</template>

<script>
import axios from 'axios'
import Camera from '@components/Camera.vue'

export default {
    components: { Camera },
    data:() => ({
        user: {}
    }),
    mounted() {
        this.subscribeChannel()
    },
    methods: {
        subscribeChannel() {
            this.$root.pusher
                .subscribe('scan-absent')
                .bind("show-data-absent", (data) => {
                    this.user = data.user
                    this.$forceUpdate()
                })
        },
        async onCameraSnap(data = {}) {
            const form = {
                user_id: this.user.id,
                shift_id: data.shift_id,
                image: data.image
            }

            try {
                await axios.post("/api/absent", form)
                
                setTimeout(() => {
                    this.user = {}
                    this.$refs.camera.destroyCamera()
                    this.$forceUpdate()
                }, 5000);
            } catch (error) {
                console.log(error)
            }
        }
    },
}
</script>

<style scoped>
.result {
    min-height: 420px;
    align-self: center;
    border-radius: 15px;
}
</style>
