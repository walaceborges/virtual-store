<template>
  <form @submit="registerSubmit">
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputName4">Name</label>
        <input
          type="Name"
          class="form-control"
          id="inputName4"
          placeholder="Name"
          v-model="name"
        />
      </div>
      <div class="form-group col-md-6">
        <label for="inputEmail4">Email</label>
        <input
          type="Email"
          class="form-control"
          id="inputEmail4"
          placeholder="Email"
          v-model="email"
        />
      </div>
    </div>
    <div class="form-group">
      <label for="inputPassword">Password</label>
      <input
        type="text"
        class="form-control"
        id="inputPassword"
        placeholder="Password"
        v-model="password"
      />
    </div>
    <button type="submit" class="btn btn-primary">Register</button>
  </form>
</template>

<script>
import register from "../services/register.js";
// import router from "../router/index.js";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  name: "userRegister",
  methods: {
    registerSubmit(e) {
      e.preventDefault();
      register(this.name, this.email, this.password);
    },
  },
};
</script>
