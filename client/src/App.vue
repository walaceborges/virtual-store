<template>
  <router-view />
</template>

<script>
export default {
  setup() {
    document.title = "HotTravel";
  },
  watch: {
    $route() {
      this.$store.commit("getBalance");
    },
  },
};
</script>
