<template>
    <div class="login-page">
      <h1>Login</h1>
      <LoginForm />
    </div>
  </template>
  
  <script>
  import LoginForm from '@/components/LoginForm.vue';
  
  export default {
    name: 'LoginPage',
    components: {
      LoginForm,
    },
  };
  </script>
  
  <style>
  .login-page {
    text-align: center;
    padding: 20px;
  }
  </style>