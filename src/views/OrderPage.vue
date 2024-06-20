<template>
  <div class="order-page">
    <h1>Order</h1>
    <OrderForm />
  </div>
</template>

<script>
import OrderForm from '@/components/OrderForm.vue';

export default {
  name: 'OrderPage',
  components: {
    OrderForm,
  },
};
</script>

<style>
.order-page {
  text-align: center;
  padding: 20px;
}
</style>