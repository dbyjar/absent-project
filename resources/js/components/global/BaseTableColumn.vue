<template>
  <span :class="['base-table-column', { 'overflow-visible': overflowVisible }]">
    <a href="javascript:;" class="text-dark" @click="$emit('click')">
      <slot></slot>
    </a>
  </span>
</template>

<script>
export default {
  props: {
    overflowVisible: {
      type: Boolean,
      default: false
    }
  }
}
</script>