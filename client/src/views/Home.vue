<template>
  <div class="home">
    <layout>
      <img alt="Vue logo" src="../assets/logo.png" />
      <Home msg="Welcome to Your Vue.js App" />
    </layout>
  </div>
</template>

<script>
import Home from "@/components/ListProducts.vue";
import layout from "../layout/logged.vue";

export default {
  name: "HomeView",
  components: {
    Home,
    layout,
  },
};
</script>
