<script>

  import StarRating from './StarRating.vue'
  import '@/styles/style.css';
  
  export default {
    props: {
      image: String,
      name: String,
      isRecipeOfTheDay: Boolean
    },
    components: {
      StarRating
    }
  };
</script>

<template>
    <div class="recipe">
      <div class="recipeImage">
        <img :src="image" :alt="name">
        <div v-if="isRecipeOfTheDay" class="recipeOfTheDay">Recipe of the Day</div>
      </div>
      <div class="recipeDescription">
        <div class="recipeName">
          {{ name }}
        </div>
        <StarRating />
      </div>
    </div>
</template>
  

  
