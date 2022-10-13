<template>
  <div class="modal fade" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            <slot name="title"></slot>
          </h5>
          <button 
            type="button" 
            class="btn-close" 
            aria-label="Close"
            @click="hide" 
          ></button>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
          <div v-if="!$slots.footer">
            <button type="button" class="btn btn-secondary" @click="hide">Close</button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap'

export default {
  props: {
    backdrop: {
      type: String,
      default: "static"
    }
  },
  data:() => ({
    modal: undefined
  }),
  methods: {
    show() {
      this.modal.show();
    },
    hide() {
      this.modal.hide();
    },
  },
  mounted() {
    const modal = $(this.$refs.modal)

    this.modal = new Modal(modal, {
      backdrop: this.backdrop,
      keyboard: false
    })

    $(this.$refs.modal).on("hidden.bs.modal", () => {
      this.$emit("hide");

      if ($(".modal:visible").length) {
        $("body").addClass("modal-open");
      }
    });
  },
  beforeDestroy() {
    this.hide();
  },
}
</script>