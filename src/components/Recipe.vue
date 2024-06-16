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
  },
  components: {
    StarRating,
  },
  methods: {
    selectRecipe() {
      this.$emit("select-recipe", this.id);
    },
  },
};
</script>

<template>
  <div class="recipe" @click="selectRecipe">
    <div class="recipeImage">
      <img :src="image" :alt="name" />
      <div v-if="isRecipeOfTheDay" class="recipeOfTheDay">
        Recipe of the Day
      </div>
    </div>
    <div class="recipeDescription">
      <div class="recipeName">
        {{ name }}
      </div>
      <StarRating />
    </div>
  </div>
</template>




