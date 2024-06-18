<script>
import { ref } from "vue";
import axios from "axios";
import Recipe from "./Recipe.vue";
import Modal from "./Modal.vue";
import "@/styles/style.css";

export default {
  components: {
    Recipe,
    Modal,
  },
  setup() {
    const searchTerm = ref("");
    const searchResults = ref([]);
    const error = ref(null);
    const isModalOpen = ref(false);

    const searchRecipes = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm.value}`);
        if (response.data.meals) {
          searchResults.value = response.data.meals.map(meal => ({
            id: meal.idMeal,
            image: meal.strMealThumb,
            name: meal.strMeal,
            isRecipeOfTheDay: false,
          }));
          isModalOpen.value = true;
        } else {
          searchResults.value = [];
          error.value = "No recipes found.";
        }
      } catch (err) {
        console.error("Error fetching recipes:", err);
        error.value = "An error occurred while fetching recipes.";
      }
    };

    const closeModal = () => {
      isModalOpen.value = false;
    };

    return {
      searchTerm,
      searchResults,
      error,
      isModalOpen,
      searchRecipes,
      closeModal,
    };
  },
};
</script>

<template>
  <div class="search-container">
    <div class="search-bar">
      <input type="text" v-model="searchTerm" placeholder="Search for a recipe..." />
      <button @click="searchRecipes">Search</button>
    </div>
    <div v-if="error" class="error">{{ error }}</div>
    <Modal :isOpen="isModalOpen" @close="closeModal">
      <div class="recipes" v-if="searchResults.length">
        <Recipe v-for="recipe in searchResults" :key="recipe.id" :image="recipe.image" :name="recipe.name" :id="recipe.id" :isRecipeOfTheDay="recipe.isRecipeOfTheDay" />
      </div>
      <div v-if="!searchResults.length && !error" class="no-results">No results to display.</div>
    </Modal>
  </div>
</template>
