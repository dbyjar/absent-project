<template>
  <portal to="destination">
    <div class="d-flex justify-content-end">
      <slot></slot>
      <a href="javascript:;" class="btn btn-primary text-white ms-2" @click="$emit('click')" v-if="!withoutDefaultButton">
        <i class="fas fa-fw fa-plus"></i> Add
      </a>
    </div>
  </portal>
</template>

<script>
export default {
  props: {
    withoutDefaultButton: {
      type: Boolean,
      default: false,
    }
  }
}
</script>