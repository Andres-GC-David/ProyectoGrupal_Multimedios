<script>
  import breadImage from '../assets/Images/bread.jpg';
  import chickenImage from '../assets/Images/chicken.jpg';
  import dessertImage from '../assets/Images/dessert.jpg';
  import pastaImage from '../assets/Images/pasta.jpeg';
  import saladImage from '../assets/Images/salad.jpg';
  import '@/styles/style.css';
  
  export default {
    data() {
      return {
        slides: [
          { src: breadImage, alt: "Bread" },
          { src: chickenImage, alt: "Chicken" },
          { src: dessertImage, alt: "Dessert" },
          { src: pastaImage, alt: "Pasta" },
          { src: saladImage, alt: "Salad" }
        ]
      };
    }
  };
</script>

<template>
    <div class="recipesBanner">
      <div class="slides">
        <div class="slide" v-for="slide in slides" :key="slide.alt">
          <img :src="slide.src" :alt="slide.alt">
          <p>{{ slide.alt }}</p>
        </div>
      </div>
    </div>
</template>
  
  