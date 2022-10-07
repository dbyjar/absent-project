<template>
  <small class="text-danger mt-2" v-if="errors[keyError]">
    {{ errors[keyError][0] }}
  </small>
</template>

<script>
export default {
  props: {
    keyError: {
      type: String,
      required: true
    },
    errors: {
      type: Object,
      required: true
    }
  }
}
</script>