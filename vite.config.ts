/// <reference types="vitest" />

import UnoCSS from "unocss/vite";
import { resolve } from "node:path";
import vue from "@vitejs/plugin-vue";
import autoPrefix from "autoprefixer";
import tsChecker from "vite-plugin-checker";
import { defineConfig, loadEnv } from "vite";
import devTools from "vite-plugin-vue-devtools";
import autoImport from "unplugin-auto-import/vite";
import viteCompression from "vite-plugin-compression";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default ({ mode }) => {
  const VITE_BASE_URL = loadEnv(mode, process.cwd()).VITE_BASE_URL;

  return defineConfig({
    base: "/",
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
        "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.prod.js", //解决i8n警告
      },
    },
    test: {
      environment: "happy-dom",
      coverage: {
        provider: "istanbul",
        reporter: ["text", "json", "html"],
        reportsDirectory: "./coverage",
        perFile: true,
        lines: 75,
        functions: 75,
        branches: 75,
        statements: 75,
      },
      open: true,
      include: ["src/test/*.test.ts"],
      globals: true,
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: "assets/js/[name].js",
          chunkFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: "assets/[ext]/[name]-[hash]-.[ext]",
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
          },
        },
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
      UnoCSS(),
      devTools(),
      viteCompression(),
      tsChecker({
        typescript: true,
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      autoImport({
        imports: [
          "pinia",
          "vue-i18n",
          "vue-router",
          "@vueuse/core",
          "@vue/composition-api",
        ],
        resolvers: [ElementPlusResolver()],
      }),
    ],
    css: {
      postcss: {
        plugins: [
          autoPrefix({
            overrideBrowserslist: [
              "Android 4.1",
              "iOS 7.1",
              "Chrome > 31",
              "ff > 31",
              "ie >= 8",
            ],
          }),
        ],
      },
    },
  });
};
