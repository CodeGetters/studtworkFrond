import { defineConfig, loadEnv } from "vite";
import { resolve } from "node:path";
import vue from "@vitejs/plugin-vue";
import tsChecker from "vite-plugin-checker";
import devTools from "vite-plugin-vue-devtools";

// https://vitejs.dev/config/
export default ({ mode }) => {
  const VITE_BASE_URL = loadEnv(mode, process.cwd()).VITE_BASE_URL;

  return defineConfig({
    base: "/",
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    server: {
      proxy: {
        "/api/": {
          target: VITE_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    plugins: [
      vue(),
      devTools(),
      tsChecker({
        typescript: true,
      }),
    ],
  });
};
