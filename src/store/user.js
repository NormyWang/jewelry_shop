import http from '../http-common';

export default {
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async fetchUser({ commit }, username) {
      const response = await http.get(`/users/profile/${username}`);
      commit('setUser', response.data);
    },
    async registerUser(_, userData) {
      await http.post('/users/register', userData);
    },
    async loginUser({ commit }, credentials) {
      const response = await http.post('/users/login', credentials);
      commit('setUser', response.data);
    },
  },
  getters: {
    user: state => state.user,
    isAuthenticated: state => !!state.user,
  },
};