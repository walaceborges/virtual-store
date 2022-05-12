<template>
  <NavHeader></NavHeader>
  <nav>
    <router-link to="/">Login</router-link> |
    <router-link to="/home">Home</router-link>
    <!-- <router-link to="/about">About</router-link> -->
    <router-link to="/user/register">RegisterUser</router-link>
    <router-link to="/product/register">RegisterProduct</router-link>
  </nav>
  <router-view />
</template>

<script>
import NavHeader from "@/components/NavHeader.vue";

export default {
  components: {
    NavHeader,
  },
};
</script>
