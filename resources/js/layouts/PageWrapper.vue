<template>
    <div class="page-wrapper">
        <div class="page-breadcrumb">
            <div class="row align-items-center">
                <div class="col-6">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0 d-flex align-items-center">
                            <li class="breadcrumb-item">
                                <a href="/" class="link">
                                    <i class="mdi mdi-home-outline fs-4"></i>
                                </a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">
                                <span class="text-capitalize">{{ $route.name }}</span>
                            </li>
                        </ol>
                        </nav>
                    <h1 class="mb-0 fw-bold">
                        <span class="text-capitalize">{{ $route.name }}</span>
                    </h1> 
                </div>
                <!-- <div class="col-6">
                    <div class="text-end upgrade-btn">
                        <a href="/" class="btn btn-primary text-white" target="_blank">Pro</a>
                    </div>
                </div> -->
            </div>
        </div>
        <div class="container-fluid">
            <slot></slot>
        </div>
        <!-- <Footer></Footer> -->
    </div>
</template>

<script>
import Footer from '@layouts/Footer.vue'

export default {
    components: { Footer },
}
</script>