<script>
import Header from './components/Header.vue';
import RecipesBanner from './components/RecipesBanner.vue';
import Personalizing from './components/Personalizing.vue';
import UploadRecipes from './components/UploadRecipes.vue';
import Recipe from './components/Recipe.vue';
import '@/styles/style.css';
import { useRecipes } from './composables/useRecipes.js';



export default {
  components: {
    Header,
    RecipesBanner,
    Personalizing,
    UploadRecipes,
    Recipe
  },
  setup() {
    const { recipes } = useRecipes();
    return { recipes };
  }
};
</script>

<template>

  <div class="container">
    <Header> </Header>
    <RecipesBanner />
    <div class="options">
      <Personalizing />
      <UploadRecipes />
    </div>
    <div class="recipes">
      <Recipe v-for="recipe in recipes" :key="recipe.name" :image="recipe.image" :name="recipe.name" :isRecipeOfTheDay="recipe.isRecipeOfTheDay" />
    </div>
  </div>
  
</template>


