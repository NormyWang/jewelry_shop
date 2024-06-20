<template>
  <div class="payment-page">
    <h1>Payment</h1>
    <PaymentForm />
  </div>
</template>

<script>
import PaymentForm from '@/components/PaymentForm.vue';

export default {
  name: 'PaymentPage',
  components: {
    PaymentForm,
  },
};
</script>

<style>
.payment-page {
  text-align: center;
  padding: 20px;
}
</style>