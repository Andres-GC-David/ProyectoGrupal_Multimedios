<script>
import { ref, onMounted, watch } from "vue";
import "@/styles/style.css";
import Header from "./components/Header.vue";
import RecipesBanner from "./components/RecipesBanner.vue";
import Personalizing from "./components/Personalizing.vue";
import UploadRecipes from "./components/UploadRecipes.vue";
import Recipe from "./components/Recipe.vue";
import RecipeDetails from "./components/RecipeDetails.vue";
import { useRecipes } from "./composables/useRecipes.js";
import ShowDetail from "./components/ShowDetail.vue";
import Search from "./components/Search.vue";

export default {
  components: {
    Header,
    RecipesBanner,
    Personalizing,
    UploadRecipes,
    Recipe,
    RecipeDetails,
    ShowDetail,
    Search,
  },

  setup() {
    const { recipes } = useRecipes();
    const selectedRecipeId = ref(null);
    const showDetail = ref(false);
    const showSearch = ref(false);
    const favoriteRecipes = ref([]);

    const handleSelectRecipe = (id) => {
      selectedRecipeId.value = id;
      showDetail.value = true;
    };

    const closeDetail = () => {
      showDetail.value = false;
    };

    const toggleSearch = () => {
      showSearch.value = !showSearch.value;
    };

    const toggleFavorite = ({ id, isFavorite }) => {
      if (isFavorite) {
        const recipe = recipes.value.find(recipe => recipe.id === id);
        if (recipe && !favoriteRecipes.value.find(fav => fav.id === id)) {
          favoriteRecipes.value.push(recipe);
        }
      } else {
        favoriteRecipes.value = favoriteRecipes.value.filter(fav => fav.id !== id);
      }
      saveFavoritesToLocalStorage();
    };

    const isFavorited = (id) => {
      return favoriteRecipes.value.some(fav => fav.id === id);
    };

    const loadFavoritesFromLocalStorage = () => {
      const storedFavorites = JSON.parse(localStorage.getItem("favoriteRecipes"));
      if (storedFavorites) {
        favoriteRecipes.value = storedFavorites;
      }
    };

    const saveFavoritesToLocalStorage = () => {
      localStorage.setItem("favoriteRecipes", JSON.stringify(favoriteRecipes.value));
    };

    onMounted(() => {
      loadFavoritesFromLocalStorage();
    });

    watch(favoriteRecipes, saveFavoritesToLocalStorage, { deep: true });

    return {
      recipes,
      selectedRecipeId,
      showDetail,
      handleSelectRecipe,
      closeDetail,
      showSearch,
      toggleSearch,
      toggleFavorite,
      isFavorited,
      favoriteRecipes,
    };
  },
};
</script>

<template>
  <div class="container">
    <Header @toggle-search="toggleSearch"></Header>
    <RecipesBanner 
      :favoriteRecipes="favoriteRecipes"
      @select-recipe="handleSelectRecipe"
      @toggle-favorite="toggleFavorite"
    />
    <div class="options">
      <Personalizing />
      <UploadRecipes />
    </div>
    <div class="recipes">
      <Recipe
        v-for="recipe in recipes"
        :key="recipe.id"
        :image="recipe.image"
        :name="recipe.name"
        :id="recipe.id"
        :isRecipeOfTheDay="recipe.isRecipeOfTheDay"
        :isFavorited="isFavorited(recipe.id)"
        @select-recipe="handleSelectRecipe"
        @toggle-favorite="toggleFavorite"
      />
    </div>
    <ShowDetail v-if="showDetail" @close="closeDetail">
      <RecipeDetails :recipeId="selectedRecipeId" />
    </ShowDetail>
    <Search v-if="showSearch" />
  </div>
</template>
