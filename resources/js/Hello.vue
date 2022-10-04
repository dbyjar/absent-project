<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Absent</div>

                    <div class="card-body">
                        <div class="d-flex mb-3 justify-content-center">
                            <div id="camera"></div>
                            <div id="result"></div>
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Webcam from 'webcamjs'

export default {
    created() {
        Webcam.set({
            width: 320,
            height: 240,
            flip_horiz: true,
        });
    },
    data:() => ({
        result: false
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

            Webcam.snap(function(data_uri) {
                base64URI = data_uri
                
				document.getElementById('result').innerHTML = '<img src="' + data_uri + '"/>';
			});

            const data = new FormData()
            data.append("image", base64URI)

            try {
                await axios.post("/api/absent", data)

                alert("success")
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>
