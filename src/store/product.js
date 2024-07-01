import http from '../http-common';

export default {
  state: {
    products: [],
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      const response = await http.get('/products');
      commit('setProducts', response.data);
    },
  },
  getters: {
    products: state => state.products,
  },
};