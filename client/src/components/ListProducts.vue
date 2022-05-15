<template>
  <section class="py-5">
    <div class="container px-4 px-lg-5 mt-5">
      <div
        class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
      >
        <div v-for="product in products" :key="product.id">
          <div class="col mb-5">
            <div class="card h-100">
              <!-- Sale badge-->
              <div
                class="badge bg-dark text-white position-absolute"
                style="top: 0.5rem; right: 0.5rem"
              >
                Sale
              </div>
              <!-- Product image-->
              <img class="card-img-top" v-bind:src="product.image" />
              <!-- Product details-->
              <div class="card-body p-4">
                <div class="text-center">
                  <!-- Product name-->
                  <h5 class="fw-bolder">{{ product.name }}</h5>
                  <!-- Product price-->
                  <span>{{ product.price }}</span>
                </div>
              </div>
              <!-- Product actions-->
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <button
                    @click="buyProduct(product.id)"
                    v-if="!isAdmin"
                    class="btn btn-outline-dark mt-auto"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import productService from "../services/product";
import userService from "../services/user";

export default {
  data() {
    return {
      products: [],
    };
  },
  name: "ListProducts",
  computed: {
    isAdmin() {
      console.log(this.$store.state.isAdmin);
      return this.$store.state.isAdmin;
    },
  },
  methods: {
    buyProduct(idProduct) {
      userService.buyProduct(idProduct).then(() => {
        this.$store.commit("getBalance");
      });
    },
  },
  created() {
    productService.getProducts().then((products) => {
      this.products = products;
    });
  },
};
</script>
