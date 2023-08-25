import { useConfigStore } from "@/store/config";
import { start, done } from "@/core/utils/nprogress";
import { createWebHistory, createRouter } from "vue-router";
import type { RouteRecordRaw, RouterOptions, Router } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("@/layouts/core/MainLayout.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        meta: {
          pageTitle: "Dashboard",
        },
        component: () => import("@/pages/main/DashboardPage.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/core/AuthLayout.vue"),
    children: [
      {
        path: "/sign-in",
        name: "login",
        meta: {
          pageTitle: "Sign in",
        },
        component: () => import("@/pages/auth/LoginPage.vue"),
      },
      {
        path: "/sign-up",
        name: "register",
        meta: {
          pageTitle: "Sign up",
        },
        component: () => import("@/pages/auth/RegisterPage.vue"),
      },
    ],
  },

  {
    path: "/",
    component: () => import("@/layouts/core/SystemLayout.vue"),
    children: [
      {
        path: "/404",
        meta: {
          pageTitle: "404",
        },
        component: () => import("@/pages/error/ClientError.vue"),
      },
      {
        path: "/500",
        meta: {
          pageTitle: "500",
        },
        component: () => import("@/pages/error/ServerError.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const option: RouterOptions = {
  routes,
  history: createWebHistory(),
};

const router: Router = createRouter(option);

router.beforeEach((to) => {
  const configStore = useConfigStore();

  start();
  document.title = `${to.meta.pageTitle} - ${import.meta.env.VITE_APP_NAME}`;
  configStore.resetDefaultConfig();
});

router.afterEach(() => {
  done();
});

export default router;
