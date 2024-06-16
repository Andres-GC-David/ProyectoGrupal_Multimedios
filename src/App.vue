<script>
import { ref } from "vue";
import "@/styles/style.css";
import Header from "./components/Header.vue";
import RecipesBanner from "./components/RecipesBanner.vue";
import Personalizing from "./components/Personalizing.vue";
import UploadRecipes from "./components/UploadRecipes.vue";
import Recipe from "./components/Recipe.vue";
import RecipeDetails from "./components/RecipeDetails.vue";
import { useRecipes } from "./composables/useRecipes.js";
import ShowDetail from "./components/ShowDetail.vue";

export default {
  components: {
    Header,
    RecipesBanner,
    Personalizing,
    UploadRecipes,
    Recipe,
    RecipeDetails,
    ShowDetail,
  },

  setup() {
    const { recipes } = useRecipes();
    const selectedRecipeId = ref(null);
    const showDetail = ref(false);

    const handleSelectRecipe = (id) => {
      selectedRecipeId.value = id;
      showDetail.value = true;
    };

    const closeDetail = () => {
      showDetail.value = false;
    };

    return {
      recipes,
      selectedRecipeId,
      showDetail,
      handleSelectRecipe,
      closeDetail,
    };
  },
};
</script>

<template>
  <div class="container">
    <Header></Header>
    <RecipesBanner />
    <div class="options">
      <Personalizing />
      <UploadRecipes />
    </div>
    <div class="recipes">
      <Recipe v-for="recipe in recipes" :key="recipe.id" :image="recipe.image" :name="recipe.name" :id="recipe.id" :isRecipeOfTheDay="recipe.isRecipeOfTheDay"
        @select-recipe="handleSelectRecipe"
      />
    </div>
    <ShowDetail v-if="showDetail" @close="closeDetail">
      <RecipeDetails :recipeId="selectedRecipeId" />
    </ShowDetail>
  </div>
</template>



