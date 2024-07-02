import { ref, onMounted } from 'vue';
import axios from 'axios';

export function useRecipes() {
  const recipes = ref([]);
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  const getRandomLetters = (count) => {
    const selectedLetters = new Set();
    while (selectedLetters.size < count) {
      const randomLetter = letters[Math.floor(Math.random() * letters.length)];
      selectedLetters.add(randomLetter);
    }
    return Array.from(selectedLetters);
  };

  const fetchRecipes = async () => {
    try {
      const randomLetters = getRandomLetters(10);
      const responses = await Promise.all(
        randomLetters.map(letter => axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`))
      );

      const fetchedRecipes = [];
      responses.forEach(response => {
        if (response.data.meals && response.data.meals.length > 0) {
          const meal = response.data.meals[0];
          fetchedRecipes.push({
            id: meal.idMeal,
            image: meal.strMealThumb,
            name: meal.strMeal,
            isRecipeOfTheDay: false,
          });
        }
      });

      if (fetchedRecipes.length > 0) {
        const randomIndex = Math.floor(Math.random() * fetchedRecipes.length);
        fetchedRecipes[randomIndex].isRecipeOfTheDay = true;
        const recipeOfTheDay = fetchedRecipes.splice(randomIndex, 1)[0];
        fetchedRecipes.unshift(recipeOfTheDay);
      }
      recipes.value = fetchedRecipes;
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  onMounted(fetchRecipes);

  return { recipes };
}


