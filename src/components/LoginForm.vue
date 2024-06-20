<template>
    <div class="login-form">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="Username" required>
        <input type="password" v-model="password" placeholder="Password" required>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginForm',
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      async login() {
        const credentials = {
          username: this.username,
          password: this.password,
        };
        await this.$store.dispatch('loginUser', credentials);
        this.$router.push('/');
      },
    },
  };
  </script>