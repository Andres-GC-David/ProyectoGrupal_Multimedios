<script setup>
import { ref } from "vue";
import "@/styles/style.css";

const props = defineProps({
  initialFavorite: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update-favorite"]);

const isFavorite = ref(props.initialFavorite);

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
  emit("update-favorite", isFavorite.value);
};
</script>

<template>
  <div class="star-rating">
    <span @click="toggleFavorite" :class="{ favorited: isFavorite }">&#9733;</span>
  </div>
</template>

<style scoped>
.star-rating span {
  cursor: pointer;
  font-size: 24px;
}

.favorited {
  color: gold;
}
</style>
