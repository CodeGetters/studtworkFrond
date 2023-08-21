import { createWebHistory, createRouter } from "vue-Router";
import { start, done } from "@/utils/nprogress";

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

router.beforeEach(() => {
  start();
});

router.afterEach(() => {
  done();
});

export default router;
