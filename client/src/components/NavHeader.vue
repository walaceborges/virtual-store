<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container px-4 px-lg-5">
      <a class="navbar-brand" href="#!">HotTravel</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4" v-if="isAdmin">
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
        <div class="">
          <a class="nav-link text-danger" v-if="!isAdmin"
            >Saldo: {{ balance }} Milhas</a
          >
        </div>
        <div>
          <router-link to="/">
            <button type="button" class="btn btn-warning">
              Deslogar
            </button></router-link
          >
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
