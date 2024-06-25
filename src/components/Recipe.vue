<template>
  <div class="recipe">
    <div class="recipeImage" @click="selectRecipe">
      <img :src="image" :alt="name" />
      <div v-if="isRecipeOfTheDay" class="recipeOfTheDay">
        Recipe of the Day
      </div>
    </div>
    <div class="recipeDescription">
      <div class="recipeName">
        {{ name }}
      </div>
      <StarRating :initialFavorite="isFavorited" @update-favorite="toggleFavorite" />
    </div>
  </div>
</template>

<script>
import StarRating from "./StarRating.vue";

export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    isRecipeOfTheDay: {
      type: Boolean,
      default: false,
    },
    isFavorited: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    StarRating,
  },
  methods: {
    selectRecipe() {
      this.$emit("select-recipe", this.id);
    },
    toggleFavorite(isFavorite) {
      this.$emit("toggle-favorite", { id: this.id, isFavorite });
    },
  },
};
</script>
