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
        <button>Comprar</button>
      </div>
    </li>
  </ul>
</template>

<script>
import getProducts from "../services/getProducts";

export default {
  data() {
    return {
      products: [],
    };
  },
  name: "ListProducts",
  created() {
    getProducts().then((products) => {
      this.products = products;
    });
  },
};
</script>
