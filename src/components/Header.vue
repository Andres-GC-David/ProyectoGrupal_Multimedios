<script setup>
import { ref } from "vue";
import "@/styles/style.css";
import Search from "./Search.vue";

const showSearch = ref(false);

const toggleSearch = () => {
  showSearch.value = !showSearch.value;
};
</script>

<template>
  <div class="header">
    <div class="headerMenu">
      <img src="@/assets/Images/menuIcon.png" alt="Menu" />
    </div>
    <div class="headerTitle">
      <img src="@/assets/Images/AllRecipesLogo.png" alt="Logo" />
    </div>
    <div class="headerSearch" @click="toggleSearch">
      <img src="@/assets/Images/searchIcon.png" alt="Search" />
    </div>
  </div>
  <div v-if="showSearch">
    <Search />
  </div>
</template>
