<template>
  <NavHeader :balance="balance"></NavHeader>
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
import User from "@/services/user";

export default {
  data() {
    return {
      balance: 0,
    };
  },
  components: {
    NavHeader,
  },
  methods: {
    getCurrentUser() {
      User.getCurrentUser().then((user) => {
        this.balance = user.balance;
        console.log(this.balance);
      });
    },
  },
};
</script>
