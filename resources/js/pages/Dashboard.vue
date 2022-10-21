<template>
    <div>
        <Tools withoutDefaultButton>
            <button class="btn btn-secondary me-1" @click="showFilterModal = true">
                <span>Filter</span>
            </button>
            <button
                type="button"
                v-if="!isAdmin"
                class="btn btn-primary"
                @click="triggerPusherAPI"
                :disabled="loading"
            >
                <span v-if="loading"><i class="fas fa-fw fa-spinner"></i> loading</span>
                <span v-else><i class="mdi mdi-qrcode-scan"></i> Scan</span>
            </button>
        </Tools>
        
        <div class="row">
            <div class="col-lg-12">
                <Box :title="title">
                    <attendance-table ref="attendanceTable"></attendance-table>
                    <template #right-side></template>
                </Box>
            </div>
        </div>

        <filter-dashboard-modal
            ref="filterDashboardModal"
            :value.sync="showFilterModal"
            @filter-update="(data) => 
                $refs.attendanceTable.handleFilter(data)
            "
        ></filter-dashboard-modal>
    </div>
</template>

<script>
import AttendanceTable from '@components/table/AttendanceTable.vue'
import FilterDashboardModal from '@components/modal/FilterDashboardModal.vue'

export default {
    components: { AttendanceTable, FilterDashboardModal },
    computed: {
        user() {
            return this.$root.auth
        },
        isAdmin() {
            return this.user.user_role_id === 1
        },
        title() {
            return this.isAdmin
                ? "Employee Attendance"
                : "Attendance"
        }
    },
    data: () => ({
        filter: {},
        columns: [],
        loading: false,
        showFilterModal: false
    }),
    methods: {
        async triggerPusherAPI() {
            this.loading = true
            
            // $router.push({ name: 'scanQRCode' })
            await axios.post(
                "/api/attendance/show_data",
                this.user,
                this.$root.headersRequestAPI
            )

            this.loading = false
        },
    }
}
</script>