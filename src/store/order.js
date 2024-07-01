import http from '../http-common';

export default {
  state: {
    orders: [],
  },
  mutations: {
    setOrders(state, orders) {
      state.orders = orders;
    },
  },
  actions: {
    async fetchOrders({ commit }) {
      const response = await http.get('/orders');
      commit('setOrders', response.data);
    },
  },
  getters: {
    orders: state => state.orders,
  },
};