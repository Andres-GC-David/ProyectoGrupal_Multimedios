<script setup>
import { ref, watch } from "vue";
import axios from "axios";

const props = defineProps({
  recipeId: {
    type: String,
    required: true,
  },
});

const recipe = ref(null);

const fetchRecipeDetails = async (id) => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    recipe.value = response.data.meals[0];
  } catch (error) {
    console.error("Error fetching recipe details:", error);
  }
};

watch(
  () => props.recipeId,
  (newId) => {
    if (newId) {
      fetchRecipeDetails(newId);
    }
  }
);

fetchRecipeDetails(props.recipeId);
</script>

<template>
  <div v-if="recipe" class="recipe-details">
    <h2>{{ recipe.strMeal }}</h2>
    <img
      :src="recipe.strMealThumb"
      :alt="recipe.strMeal"
      class="recipe-image"
    />
    <p><strong>Category:</strong> {{ recipe.strCategory }}</p>
    <p><strong>Area:</strong> {{ recipe.strArea }}</p>
    <p><strong>Instructions:</strong> {{ recipe.strInstructions }}</p>
  </div>
</template>
