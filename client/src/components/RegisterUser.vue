<template>
  <section class="h-100 gradient-form">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-10">
          <div class="card rounded-3 text-black">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="card-body p-md-5 mx-md-4 mb-6">
                  <div class="text-center">
                    <img
                      src="https://style.shockvisual.net/wp-content/uploads/2021/10/hot-travel.png"
                      style="width: 200px"
                      alt="logo"
                    />
                    <h4 class="mt-3 mb-5 pb-1">Cadastra-se</h4>
                  </div>

                  <form @submit="registerSubmit">
                    <p>Coloque seus dados logo abaixo</p>

                    <div class="form-outline mb-4">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nome"
                        v-model="name"
                      />
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="email"
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

                    <div class="text-center pt-1 mb-4 pb-1">
                      <button
                        class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                        type="submit"
                      >
                        Confirmar
                      </button>
                    </div>

                    <div
                      class="d-flex align-items-center justify-content-center pb-4"
                    >
                      <p class="mb-0 me-2">Volte para tela de login</p>
                      <router-link to="/">
                        <button type="button" class="btn btn-outline-danger">
                          Voltar
                        </button></router-link
                      >
                    </div>
                  </form>
                </div>
              </div>
              <div
                class="col-lg-6 d-flex align-items-center gradient-custom-2"
              ></div>
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
import userService from "../services/user";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  name: "registerUser",
  methods: {
    registerSubmit(e) {
      e.preventDefault();
      userService.registerUser(this.name, this.email, this.password);
    },
  },
};
</script>
