import { createRouter, createWebHistory } from "@ionic/vue-router";
import HomePage from "../views/HomePage.vue";
import MainLayout from "../layouts/MainLayout.vue";
const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [{ path: "", component: HomePage }],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
