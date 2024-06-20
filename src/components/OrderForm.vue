<template>
  <div class="order-form">
    <h2>Order Form</h2>
    <form @submit.prevent="submitOrder">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required>

      <label for="product-ids">Product IDs (comma-separated):</label>
      <input type="text" id="product-ids" v-model="productIds" required>

      <label for="quantities">Quantities (comma-separated):</label>
      <input type="text" id="quantities" v-model="quantities" required>

      <button type="submit">Submit Order</button>
    </form>
  </div>
</template>

<script>
import http from '../http-common';

export default {
  data() {
    return {
      username: '',
      productIds: '',
      quantities: '',
    };
  },
  methods: {
    async submitOrder() {
      const orderData = {
        username: this.username,
        product_ids: this.productIds.split(',').map(Number),
        quantities: this.quantities.split(',').map(Number),
      };
      try {
        const response = await http.post('/orders', orderData);
        console.log(response.data.message);
        // Clear form fields after successful submission
        this.username = '';
        this.productIds = '';
        this.quantities = '';
      } catch (error) {
        console.error('Error submitting order:', error);
      }
    },
  },
};
</script>

<style>
.order-form {
  max-width: 400px;
  margin: 0 auto;
}

.order-form label {
  display: block;
  margin-bottom: 10px;
}

.order-form input {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
}

.order-form button {
  padding: 10px 20px;
}
</style>