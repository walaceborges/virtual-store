<template>
  <NavHeader></NavHeader>
  <nav>
    <router-link to="/">LoginSDDSD</router-link> |
    <router-link to="/home">Home</router-link>
    <router-link to="/admin/users">About</router-link>
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
  watch: {
    $route() {
      this.$store.commit("getBalance");
    },
  },
};
</script>
