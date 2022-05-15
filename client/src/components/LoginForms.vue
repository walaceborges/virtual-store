<template>
  <section class="h-100 gradient-form">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-10">
          <div class="card rounded-3 text-black">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="card-body p-md-5 mx-md-4">
                  <div class="text-center">
                    <img
                      src="https://style.shockvisual.net/wp-content/uploads/2021/10/hot-travel.png"
                      style="width: 200px"
                      alt="logo"
                    />
                    <h4 class="mt-3 mb-5 pb-1">Bem vindo!</h4>
                  </div>

                  <form @submit="loginSubmit">
                    <p>Por favor, faça login na sua conta</p>

                    <div class="form-outline mb-4">
                      <input
                        type="email"
                        id="form2Example11"
                        class="form-control"
                        placeholder="Email"
                        v-model="email"
                      />
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="password"
                        id="form2Example22"
                        class="form-control"
                        placeholder="Password"
                        v-model="password"
                      />
                    </div>

                    <div class="d-flex justify-content-around">
                      <div class="text-center pt-1 mb-4 pb-1">
                        <button
                          class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="submit"
                        >
                          Entrar
                        </button>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                          v-model="isAdmin"
                        />
                        <label class="form-check-label" for="defaultCheck1">
                          Entrar como administrador
                        </label>
                      </div>
                    </div>

                    <div
                      class="d-flex align-items-center justify-content-center pb-4"
                    >
                      <p class="mb-0 me-2">Não tem uma conta?</p>
                      <button type="button" class="btn btn-outline-danger">
                        Cadastra-se
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                <!-- <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 class="mb-4">We are more than just a company</h4>
                  <p class="small mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.gradient-custom-2 {
  /* fallback for old browsers */
  background: #fccb90;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(
    to right,
    #ee7724,
    #d8363a,
    #dd3675,
    #b44593
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
}

@media (min-width: 768px) {
  .gradient-form {
    height: 100vh !important;
  }
}
@media (min-width: 769px) {
  .gradient-custom-2 {
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
  }
}
</style>

<script>
import login from "../services/login.js";
import router from "../router/index.js";

export default {
  data() {
    return {
      email: "",
      password: "",
      isAdmin: false,
    };
  },
  name: "LoginForms",
  props: {
    msg: String,
  },
  methods: {
    loginSubmit(e) {
      e.preventDefault();
      login(this.email, this.password, this.isAdmin).then((result) => {
        if (result) {
          router.push("/home");
        } else {
          alert("Login failed");
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
