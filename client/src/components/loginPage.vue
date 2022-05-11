<template>
  <form @submit="loginSubmit">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="email"
      />
      <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        v-model="password"
      />
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import login from "../services/login.js";
import router from "../router/index.js";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    loginSubmit(e) {
      e.preventDefault();
      login(this.email, this.password).then((result) => {
        console.log(result, "test121");
        if (result) {
          router.push("/dashboard");
        } else {
          alert("Login failed");
        }
      });
      console.log(router);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
