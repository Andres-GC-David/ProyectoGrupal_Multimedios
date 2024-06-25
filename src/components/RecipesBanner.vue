<script>
export default {
  props: {
    favoriteRecipes: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <div class="recipesBanner">
    <div class="slides">
      <div class="slide" v-for="recipe in favoriteRecipes" :key="recipe.id">
        <img :src="recipe.image" :alt="recipe.name" />
        <p>{{ recipe.name }}</p>
      </div>
    </div>
  </div>
</template>

