<template>
  <div class="modal fade">
    <div class="modal-content">
      <slot name="header"></slot>
      <slot></slot>
      <div class="modal-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.$(this.$el).modal();
  },
  beforeDestroy() {
    this.getModal().destroy();
  },
  methods: {
    show() {
      this.getModal().open();
    },
    close() {
      this.getModal().close();
    },
    getModal() {
      return window.M.Modal.getInstance(this.$el);
    },
  },
};
</script>