<template>
  <div class="home">
    <layout>
      <Home />
      <Footer />
    </layout>
  </div>
</template>

<script>
import Home from "@/components/ListProducts.vue";
import Footer from "../components/MainFooter.vue";
import layout from "../layout/logged.vue";

export default {
  name: "HomeView",
  components: {
    Home,
    Footer,
    layout,
  },
};
</script>
