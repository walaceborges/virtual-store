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
        <label for="inputPrice4">Price</label>
        <input
          type="Price"
          class="form-control"
          id="inputPrice4"
          placeholder="Price"
          v-model="price"
        />
      </div>
    </div>
    <div class="form-group">
      <label for="inputImage">Image</label>
      <input
        type="text"
        class="form-control"
        id="inputImage"
        placeholder="Image"
        v-model="image"
      />
    </div>
    <button type="submit" class="btn btn-primary">Register</button>
  </form>
</template>

<script>
import register from "../services/register.js";

export default {
  data() {
    return {
      name: "",
      price: "",
      image: "",
    };
  },
  name: "productRegister",
  methods: {
    registerSubmit(e) {
      e.preventDefault();
      register.registerProducts(this.name, this.price, this.image);
    },
  },
};
</script>
