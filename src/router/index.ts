import { createWebHistory, createRouter } from "vue-Router";

import type { RouteRecordRaw, RouterOptions, Router } from "vue-Router";

import Home from "@/pages/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Home,
  },
];

const option: RouterOptions = {
  routes,
  history: createWebHistory(),
};

const router: Router = createRouter(option);

export default router;
