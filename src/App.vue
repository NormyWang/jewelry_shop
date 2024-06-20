<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
        <li><router-link to="/order">Order</router-link></li>
        <li><router-link to="/payment">Payment</router-link></li>
        <li v-if="isAuthenticated"><router-link to="/user">Profile</router-link></li>
        <li v-if="!isAuthenticated"><router-link to="/register">Register</router-link></li>
        <li v-if="!isAuthenticated"><router-link to="/login">Login</router-link></li>
        <li v-if="isAuthenticated" @click="logout">Logout</li>
      </ul>
    </nav>

    <router-view></router-view>

    <footer>
      &copy; {{ currentYear }} Jewelry Shop. All rights reserved.
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters(['isAuthenticated']),
    currentYear() {
      return new Date().getFullYear();
    },
  },
  methods: {
    logout() {
      // Perform logout logic, e.g., clear user data from Vuex store
      this.$store.commit('setUser', null);
      // Redirect to login page or home page
      this.$router.push('/login');
    },
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
}

nav {
  background-color: #333;
  padding: 10px;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  display: inline-block;
  margin-right: 10px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
}

footer {
  background-color: #f5f5f5;
  padding: 10px;
  margin-top: 20px;
}
</style>