<template>
  <div class="user-profile">
    <h2>User Profile</h2>
    <p v-if="user">
      <strong>Username:</strong> {{ user.username }}<br>
      <strong>Email:</strong> {{ user.email }}<br>
      <strong>Address:</strong> {{ user.address }}
    </p>
    <p v-else>Loading user profile...</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['user']),
  },
  created() {
    if (this.user) {
      this.$store.dispatch('fetchUser', this.user.username);
    }
  },
};
</script>

<style>
.user-profile {
  max-width: 400px;
  margin: 0 auto;
  text-align: left;
}
</style>