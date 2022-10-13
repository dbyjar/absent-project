<template>
    <div>
        <Tools withoutDefaultButton>
            <!-- <button
                class="btn btn-primary"
                v-if="user?.user_role_id === 1"
                @click="$router.push({ name: 'scanQRCode' })"
            >
                <i class="mdi mdi-qrcode-scan"></i> Scan QR
            </button> -->
            <button
                class="btn btn-primary"
                v-if="user?.user_role_id === 1"
                @click="triggerPusherAPI"
            >
                <i class="mdi mdi-qrcode-scan"></i> Absent
            </button>
        </Tools>
        <div class="row">
            <div class="col-lg-12">
                <Box :title="'Employee Attendance'">
                    <attendance-table></attendance-table>
                    <template #right-side></template>
                </Box>
            </div>
        </div>
    </div>
</template>

<script>
import AttendanceTable from '@components/table/AttendanceTable.vue'

export default {
    components: { AttendanceTable },
    computed: {
        user() {
            return this.$root.auth
        }
    },
    data: () => ({
        columns: []
    }),
    methods: {
        async triggerPusherAPI() {
            await axios.post(
                "/api/attendance/show_data",
                this.user,
                this.$root.headersRequestAPI
            )
        }
    }
}
</script>