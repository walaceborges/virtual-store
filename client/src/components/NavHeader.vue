<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container px-4 px-lg-5">
      <a class="navbar-brand" href="#!">HotTravel</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#!"
              ><router-link to="/home">Home</router-link></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!"
              ><router-link to="/admin/users">Lista de Usuarios</router-link></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!"
              ><router-link to="/product/register"
                >Cadastrar Produto</router-link
              ></a
            >
          </li>
        </ul>
        <div>
          <router-link to="/">
            <button type="button" class="btn btn-warning">
              Deslogar
            </button></router-link
          >
        </div>
        <div class="">
          <a class="nav-link text-danger" v-if="!isAdmin">{{ balance }}</a>
        </div>
      </div>
    </div>
  </nav>
  <header class="bg-dark py-5">
    <div class="container px-4 px-lg-5 my-5">
      <div class="text-center text-white">
        <h1 class="display-4 fw-bolder">Shop in style</h1>
        <p class="lead fw-normal text-white-50 mb-0">
          With this shop hompeage template
        </p>
      </div>
    </div>
  </header>
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
      return this.$store.state.isAdmin;
    },
  },
  mounted() {
    this.balance = this.$store.state.balance;
  },
  watch: {
    isUpdated() {
      this.balance = this.$store.state.balance;
    },
  },
};
</script>
