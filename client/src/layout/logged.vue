<template>
  <div>
    <NavHeader></NavHeader>
    <!-- <nav>
      <router-link to="/">LoginSDDSD</router-link>
      <router-link to="/home">Home</router-link>
      <router-link to="/admin/users">About</router-link>
      <router-link to="/product/register">RegisterProduct</router-link>
    </nav> -->
    <slot></slot>
  </div>
</template>

<script>
import NavHeader from "@/components/NavHeader.vue";

export default {
  components: {
    NavHeader,
  },
  name: "layoutDefault",
};
</script>
