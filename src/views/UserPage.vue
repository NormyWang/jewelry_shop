<template>
  <div class="user-page">
    <h1>User Profile</h1>
    <UserProfile />
  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue';

export default {
  name: 'UserPage',
  components: {
    UserProfile,
  },
};
</script>

<style>
.user-page {
  text-align: center;
  padding: 20px;
}
</style>