<template>
    <div :class="['page-wrapper', { 'ms-0': isLandingPage }]">
        <div class="page-breadcrumb" v-if="!isLandingPage">
            <div class="row align-items-center">
                <div class="col-6">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0 d-flex align-items-center">
                            <li class="breadcrumb-item">
                                <a href="javascript:;" class="link" @click="toHome">
                                    <i class="mdi mdi-home-outline fs-4"></i>
                                </a>
                            </li>
                            <li
                                @click="toPage"
                                :class="[
                                    'breadcrumb-item', {
                                        'active': $route.meta.pageAct === '',
                                        'breadcrumb-page': $route.meta.pageAct,
                                        }
                                    ]"
                                aria-current="page"
                            >
                                <span class="text-capitalize">{{ $route.meta.menuTranslate }}</span>
                            </li>
                            <li :class="[
                                    'breadcrumb-item', {
                                        'active': $route.meta.pageAct
                                        }
                                    ]"
                                aria-current="page"
                            >
                                <span class="text-capitalize">{{ $route.meta.pageAct }}</span>
                            </li>
                        </ol>
                    </nav>
                    <h1 class="mb-0 fw-bold">
                        <span class="text-capitalize">{{ $route.meta.pageAct }} {{ $route.meta.menuTranslate }}</span>
                    </h1> 
                </div>
                <div class="col-6 d-flex justify-content-end">
                    <portal-target name="destination"></portal-target>
                </div>
            </div>
        </div>
        <div class="container-fluid"><slot></slot></div>
        <Footer v-if="!isLandingPage" />
    </div>
</template>

<script>
import Footer from '@layouts/Footer.vue'

export default {
    components: {
        Footer,
    },
    computed: {
        isLandingPage() {
            if (
                this.$route.name === "login"
                || this.$route.name === "absent"
                || this.$route.name === "notFound"
            ) {
                return true
            } else if (this.$route.name === null) {
                return true
            } else {
                return false
            }
        }
    },
    methods: {
        toHome() {
            if (this.$route.name !== 'dashboard') {
                this.$router.push({
                    name: 'dashboard'
                })
            }
        },
        toPage() {
            if (this.$route.meta.pageAct === "") return;

            this.$router.push({
                name: this.$route.meta.origin
            })
        }
    }
}
</script>

<style scoped>
.breadcrumb-page {
    cursor: pointer;
}
</style>