<template>
  <div class="btn-group dropstart">
    <a
      href="javascript:;"
      class="dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <i class="ti ti-arrow-circle-down"></i>
    </a>
    <ul class="dropdown-menu">
      <slot></slot>
      <li v-if="$slots.default">
        <hr class="dropdown-divider">
      </li>
      <li><a 
        href="javascript:;"
        class="dropdown-item" 
        v-if="!withoutDetail"
        @click="$emit('detail')"
      >
        <i class="fas fa-fw fa-info-circle"></i> Detail
      </a></li>
      <li><a 
        href="javascript:;"
        class="dropdown-item" 
        v-if="!withoutEdit"
        @click="$emit('edit')"
      >
        <i class="fas fa-fw fa-pen-square"></i> Edit
      </a></li>
      <li><a 
        href="javascript:;"
        class="dropdown-item" 
        v-if="!withoutRemove"
        @click="$emit('remove')"
      >
        <i class="fas fa-fw fa-trash"></i> Remove
      </a></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    withoutRemove: {
      type: Boolean,
      default: false
    },
    withoutDetail: {
      type: Boolean,
      default: false
    },
    withoutEdit: {
      type: Boolean,
      default: false
    },
  }
}
</script>