<template>
  <BaseModal ref="bsModal">
    <template #title>Title</template>
  </BaseModal>
</template>

<script>
import { bsModalComponentOptions } from '@/mixins'

export default {
  mixins: [bsModalComponentOptions("bsModal")]
}
</script>