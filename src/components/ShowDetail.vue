
<script setup>
const emit = defineEmits(["close"]);

const closeDetail = () => {
  emit("close");
};
</script>

<template>
  <div class="detail-overlay" @click="closeDetail">
    <div class="detail-content" @click.stop>
      <slot></slot>
      <button class="close-button" @click="closeDetail">Close</button>
    </div>
  </div>
</template>

