<template>
  <div class="about">
    <layout>
      <ListUsers></ListUsers>
      <Footer />
    </layout>
  </div>
</template>

<script>
import ListUsers from "../components/ListUsers.vue";
import Footer from "../components/MainFooter.vue";
import layout from "../layout/logged.vue";

export default {
  name: "UserListPage",
  components: {
    ListUsers,
    Footer,
    layout,
  },
};
</script>
