<script>
import "@/styles/style.css";

  export default {
    props: {
      isOpen: {
        type: Boolean,
        required: true,
      },
    },
    methods: {
      closeModal() {
        this.$emit("close");
      },
    },
  };
</script>

<template>
    <div v-if="isOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        
        <slot></slot>
      </div>
    </div>
</template>
  