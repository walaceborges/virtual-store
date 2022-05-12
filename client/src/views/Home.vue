<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Home msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Home from "@/components/ListProducts.vue";

export default {
  name: "HomeView",
  components: {
    Home,
  },
};
</script>
