<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          <a class="nav-link" href="#">Features</a>
          <a class="nav-link" href="#">Pricing</a>
          <a class="nav-link disabled">Disabled</a>
          <p class="nav-link text-danger" v-if="!isAdmin">{{ balance }}</p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      balance: 0,
    };
  },
  computed: {
    isUpdated() {
      return this.$store.state.isUpdated;
    },
    isAdmin() {
      console.log(this.$store.state.isAdmin);
      return this.$store.state.isAdmin;
    },
  },
  mounted() {
    this.balance = this.$store.state.balance;
  },
  watch: {
    isUpdated() {
      console.log("teste");
      this.balance = this.$store.state.balance;
    },
  },
};
</script>
