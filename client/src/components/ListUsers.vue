<template>
  <table class="table">
    <tbody v-for="user in users" :key="user.id">
      <tr>
        <td scope="col">{{ user.id }}</td>
        <td scope="col">{{ user.name }}</td>
        <td scope="col">{{ user.email }}</td>
        <td scope="col">{{ user.balance }}</td>
        <td scope="col">
          <input v-model="user.newBalance" placeholder="Digite o novo saldo" />
        </td>
        <td>
          <button
            type="button"
            class="btn btn-outline-primary"
            @click="updateBalance(user.id)"
          >
            Atualizar
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import userService from "../services/user";
import adminService from "../services/admin";

export default {
  data() {
    return {
      users: [],
    };
  },
  name: "ListUsers",
  mounted() {
    this.getUsers();
  },
  methods: {
    updateBalance(userId) {
      const user = this.users.find((user) => user.id === userId);
      adminService.updateUserBalance(user.id, user.newBalance).then(() => {
        this.getUsers();
      });
    },
    getUsers() {
      userService.getUsers().then((users) => {
        this.users = users;
        console.log(users);
      });
    },
  },
};
</script>
