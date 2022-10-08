<template>
    <Box
        :title="'Absent'"
        :subtitle="'Please absent here with QR code or Camera'"
    >
        <div class="row">
            <div class="col-6">
                <div class="card-body d-flex flex-column">
                    <img class="result" src="@assets/images/users/4.jpg" alt="qr">
                    <span class="text-center text-capitalize fw-bold mt-3">
                        scan here
                    </span>
                </div>
            </div>
            <div class="col-6">
                <camera @snap="onCameraSnap" />
            </div>
        </div>
    </Box>
</template>

<script>
import axios from 'axios'
import Camera from '@components/Camera.vue'

export default {
    components: {
        Camera
    },
    methods: {
        async onCameraSnap(image) {
            const data = new FormData()
            data.append("image", image)

            try {
                await axios.post("/api/employee/absent", data)

                alert("success")
            } catch (error) {
                
            }
        }
    },
}
</script>

<style scoped>
.result {
    max-width: 560px;
    border-radius: 15px;
    align-self: center;
}
</style>
