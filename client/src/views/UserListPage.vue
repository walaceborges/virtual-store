<template>
  <div class="about">
    <h1>Bem vindo a tela de listar usuarios</h1>
    <ListUsers></ListUsers>
  </div>
</template>

<script>
import ListUsers from "../components/ListUsers.vue";

export default {
  name: "UserListPage",
  components: {
    ListUsers,
  },
};
</script>
