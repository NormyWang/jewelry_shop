<template>
  <div class="register-page">
    <h1>Register</h1>
    <RegisterForm />
  </div>
</template>

<script>
import RegisterForm from '@/components/RegisterForm.vue';

export default {
  name: 'RegisterPage',
  components: {
    RegisterForm,
  },
};
</script>

<style>
.register-page {
  text-align: center;
  padding: 20px;
}
</style>