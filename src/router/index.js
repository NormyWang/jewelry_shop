import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ProductsPage from '../views/ProductsPage.vue';
import OrderPage from '../views/OrderPage.vue';
import UserPage from '../views/UserPage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import LoginPage from '../views/LoginPage.vue';
import PaymentPage from '../views/PaymentPage.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/products', name: 'ProductsPage', component: ProductsPage },
  { path: '/order', name: 'OrderPage', component: OrderPage },
  { path: '/user', name: 'UserPage', component: UserPage },
  { path: '/register', name: 'RegisterPage', component: RegisterPage },
  { path: '/login', name: 'LoginPage', component: LoginPage },
  { path: '/payment', name: 'PaymentPage', component: PaymentPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;