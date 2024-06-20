<template>
  <div class="register-form">
    <h1>Register</h1>
    <form @submit.prevent="register">
      <input type="text" v-model="username" placeholder="Username" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <input type="email" v-model="email" placeholder="Email" required>
      <input type="text" v-model="address" placeholder="Address" required>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  data() {
    return {
      username: '',
      password: '',
      email: '',
      address: '',
    };
  },
  methods: {
    async register() {
      const userData = {
        username: this.username,
        password: this.password,
        email: this.email,
        address: this.address,
      };
      await this.$store.dispatch('registerUser', userData);
      this.$router.push('/login');
    },
  },
};
</script>