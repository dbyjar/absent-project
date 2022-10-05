<template>
    <Box title="Absent" header >
        <camera @snap="onCameraSnap" />
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
                await axios.post("/api/absent", data)

                alert("success")
            } catch (error) {
                console.log(error)
            }
        }
    },
}
</script>
