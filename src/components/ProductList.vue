<template>
  <div>
    <h2>Product List</h2>
    <div v-for="product in products" :key="product.id">
      <router-link :to="`/products/${product.id}`">
        <img :src="getImageUrl(product.image_url)" :alt="product.name" />
        <p>{{ product.name }}</p>
      </router-link>
      <p>{{ product.price }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('product', ['products']),
  },
  methods: {
    ...mapActions('product', ['fetchProducts']),
    getImageUrl(relativeUrl) {
      return `http://normyartistry.com:90/${relativeUrl.replace(/^\//, '')}`;
    },
  },
  created() {
    this.fetchProducts();
  },
};
</script>