<template>
  <div class="card">
    <div class="card-header text-capitalize" v-if="header">
      {{ title }}
    </div>
    <div class="card-body">
      <div class="d-md-flex">
        <div v-if="!header" class="text-capitalize">
          <h4 class="card-title">{{ title }}</h4>
          <h5 class="card-subtitle">{{ subtitle }}</h5>
        </div>
        <div class="ms-auto">
          <slot name="right-side"></slot>
        </div>
      </div>
      <div class="mt-3">
        <slot></slot>
      </div>
    </div>
    <div class="card-footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
  }
}
</script>