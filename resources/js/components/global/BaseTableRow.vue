<template>
  <div :class="['base-table-row', { 'base-table-row-head': head }]" >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    head: {
      type: Boolean,
      default: false
    }
  }
}
</script>