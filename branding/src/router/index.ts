import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/landing/profile",
    name: "landing-profile",
    component: () => import("../views/landing/ProfileView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(`#${process.env.BASE_URL}`),
  routes,
});

export default router;
