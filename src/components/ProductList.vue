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
export default {
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
  methods: {
    getImageUrl(relativeUrl) {
      return `http://normyartistry.com:90/${relativeUrl}`;
    },
  },
  created() {
    this.$store.dispatch('fetchProducts');
  },
};
</script>