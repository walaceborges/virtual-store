<template>
  <ul>
    <li>
      <div class="card-group" v-for="product in products" :key="product.id">
        <div class="card">
          <img
            class="card-img-top"
            v-bind:src="product.image"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.price }}</p>
          </div>
        </div>
        <button @click="buyProduct(product.id)" v-if="!isAdmin">Comprar</button>
      </div>
    </li>
  </ul>
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
