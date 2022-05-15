<template>
  <div class="home">
    <layout>
      <registerProducts></registerProducts>
      <Footer />
    </layout>
  </div>
</template>

<script>
import registerProducts from "@/components/RegisterProducts.vue";
import Footer from "../components/MainFooter.vue";
import layout from "../layout/logged.vue";

export default {
  components: {
    registerProducts,
    Footer,
    layout,
  },
};
</script>
