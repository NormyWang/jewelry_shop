import { createStore } from 'vuex';
import user from './user';
import product from './product';
import order from './order';

export default createStore({
  modules: {
    user: {
      namespaced: true,
      ...user
    },
    product: {
      namespaced: true,
      ...product
    },
    order: {
      namespaced: true,
      ...order
    }
  }
});