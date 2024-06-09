import { ref } from 'vue';
import chickenRecipe from '@/assets/Images/chickenRecipe.jpg';
import steakRecipe from '@/assets/Images/steakRecipe.jpg';
import frenchToastRecipe from '@/assets/Images/frenchToastRecipe.jpg';
import gordonBlueRecipe from '@/assets/Images/gordonBlueRecipe.jpg';

export function useRecipes() {
  const recipes = ref([
    {
      image: chickenRecipe,
      name: 'CopyCat Chipotle Chicken',
      isRecipeOfTheDay: true
    },
    {
      image: steakRecipe,
      name: 'New York Steak With Mushroom Sauce',
      isRecipeOfTheDay: false
    },
    {
      image: frenchToastRecipe,
      name: 'French Toast @Home',
      isRecipeOfTheDay: false
    },
    {
      image: gordonBlueRecipe,
      name: 'Gordon Blue With Salad',
      isRecipeOfTheDay: false
    }
  ]);

  return { recipes };
}