import { createRouter, createWebHistory } from "@ionic/vue-router";
import HomePage from "../views/HomePage.vue";
import FoodsPage from "../views/FoodsPage.vue";
import RoyaltyPage from "../views/RoyaltyPage.vue";
import OrderPage from "../views/OrderPage.vue";

const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/foods", name: "foods", component: FoodsPage },
  { path: "/royalty", name: "royalty", component: RoyaltyPage },
  { path: "/foods/order", name: "order", component: OrderPage },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
