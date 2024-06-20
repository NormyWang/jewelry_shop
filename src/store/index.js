import { createStore } from 'vuex';
import http from '../http-common';

export default createStore({
  state: {
    products: [],
    user: null,
    orders: [],
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setUser(state, user) {
      state.user = user;
    },
    setOrders(state, orders) {
      state.orders = orders;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      const response = await http.get('/products');
      commit('setProducts', response.data);
    },
    async fetchUser({ commit }, username) {
      const response = await http.get(`/users/profile/${username}`);
      commit('setUser', response.data);
    },
    async fetchOrders({ commit }) {
      const response = await http.get('/orders');
      commit('setOrders', response.data);
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
    products: state => state.products,
    user: state => state.user,
    orders: state => state.orders,
    isAuthenticated: state => !!state.user,
  },
  modules: {},
});