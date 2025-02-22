import { createRouter, createWebHistory } from "@ionic/vue-router";
import HomePage from "../views/HomePage.vue";
import FoodsPage from "../views/FoodsPage.vue";
import RoyaltyPage from "../views/RoyaltyPage.vue";
import OrderPage from "../views/OrderPage.vue";
import PaymentPage from "../views/PaymentPage.vue";
import SuccessPage from "../views/SuccessPage.vue";

const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/foods", name: "foods", component: FoodsPage },
  { path: "/royalty", name: "royalty", component: RoyaltyPage },
  { path: "/foods/order", name: "order", component: OrderPage },
  { path: "/foods/order/payment", name: "payment", component: PaymentPage },
  {
    path: "/foods/order/payment/success",
    name: "success",
    component: SuccessPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
