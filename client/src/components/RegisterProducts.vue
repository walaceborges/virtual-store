<template>
  <div class="container py-4" @submit="registerSubmit">
    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
      <div class="mb-3">
        <input
          class="form-control"
          type="text"
          placeholder="Nome do Produto"
          v-model="name"
        />
        <div class="invalid-feedback" data-sb-feedback="name:required"></div>
      </div>

      <div class="mb-3">
        <input
          class="form-control"
          type="text"
          placeholder="Valor do produto"
          v-model="price"
        />
      </div>

      <div class="mb-3">
        <input
          class="form-control"
          type="text"
          placeholder="Url da imagem"
          v-model="image"
        />
      </div>

      <div class="d-grid">
        <button class="btn btn-primary btn-lg" id="submitButton" type="submit">
          Cadastrar Produto
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import registerProduct from "../services/product";
import router from "../router/index.js";
import { useToast } from "vue-toastification";

export default {
  data() {
    return {
      name: "",
      price: "",
      image: "",
      toast: useToast(),
    };
  },
  name: "productRegister",
  methods: {
    registerSubmit(e) {
      e.preventDefault();
      registerProduct
        .registerProducts(this.name, this.price, this.image)
        .then((response) => {
          if (!response.error) {
            this.toast.success(response.message);
            router.push("/home");
          } else {
            this.toast.error(response.message);
          }
        });
    },
  },
};
</script>
