<template>
  <div class="products-page">
    <h1>Products</h1>
    <ProductList />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'ProductsPage',
  components: {
    ProductList,
  },
};
</script>

<style>
.products-page {
  text-align: center;
  padding: 20px;
}
</style>