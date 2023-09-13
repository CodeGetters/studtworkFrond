// vite.config.ts
import UnoCSS from "file:///E:/software_cache/codetotal/vue/repo/studtworkFrond/node_modules/unocss/dist/vite.mjs";
import { resolve } from "node:path";
import vue from "file:///E:/software_cache/codetotal/vue/repo/studtworkFrond/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import autoPrefix from "file:///E:/software_cache/codetotal/vue/repo/studtworkFrond/node_modules/autoprefixer/lib/autoprefixer.js";
import tsChecker from "file:///E:/software_cache/codetotal/vue/repo/studtworkFrond/node_modules/vite-plugin-checker/dist/esm/main.js";
import { defineConfig, loadEnv } from "file:///E:/software_cache/codetotal/vue/repo/studtworkFrond/node_modules/vite/dist/node/index.js";
import devTools from "file:///E:/software_cache/codetotal/vue/repo/studtworkFrond/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import autoImport from "file:///E:/software_cache/codetotal/vue/repo/studtworkFrond/node_modules/unplugin-auto-import/dist/vite.js";
import viteCompression from "file:///E:/software_cache/codetotal/vue/repo/studtworkFrond/node_modules/vite-plugin-compression/dist/index.mjs";
import Components from "file:///E:/software_cache/codetotal/vue/repo/studtworkFrond/node_modules/unplugin-vue-components/dist/vite.mjs";
import { ElementPlusResolver } from "file:///E:/software_cache/codetotal/vue/repo/studtworkFrond/node_modules/unplugin-vue-components/dist/resolvers.mjs";
var __vite_injected_original_dirname = "E:\\software_cache\\codetotal\\vue\\repo\\studtworkFrond";
var vite_config_default = ({ mode }) => {
  const VITE_BASE_URL = loadEnv(mode, process.cwd()).VITE_BASE_URL;
  return defineConfig({
    base: "/",
    resolve: {
      alias: {
        "@": resolve(__vite_injected_original_dirname, "src"),
        "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.prod.js"
        //解决i8n警告
      }
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
        statements: 75
      },
      open: true,
      include: ["src/test/*.test.ts"],
      globals: true
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: "assets/js/[name].js",
          chunkFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: "assets/[ext]/[name]-[hash]-.[ext]",
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id.toString().split("node_modules/")[1].split("/")[0].toString();
            }
          }
        }
      }
    },
    server: {
      proxy: {
        "/api/": {
          target: VITE_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "")
        }
      }
    },
    plugins: [
      vue(),
      UnoCSS(),
      devTools(),
      viteCompression(),
      tsChecker({
        typescript: true
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      autoImport({
        imports: [
          "pinia",
          "vue-i18n",
          "vue-router",
          "@vueuse/core",
          "@vue/composition-api"
        ],
        resolvers: [ElementPlusResolver()]
      })
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
              "ie >= 8"
            ]
          })
        ]
      }
    }
  });
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxzb2Z0d2FyZV9jYWNoZVxcXFxjb2RldG90YWxcXFxcdnVlXFxcXHJlcG9cXFxcc3R1ZHR3b3JrRnJvbmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXHNvZnR3YXJlX2NhY2hlXFxcXGNvZGV0b3RhbFxcXFx2dWVcXFxccmVwb1xcXFxzdHVkdHdvcmtGcm9uZFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovc29mdHdhcmVfY2FjaGUvY29kZXRvdGFsL3Z1ZS9yZXBvL3N0dWR0d29ya0Zyb25kL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxuXG5pbXBvcnQgVW5vQ1NTIGZyb20gXCJ1bm9jc3Mvdml0ZVwiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJub2RlOnBhdGhcIjtcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xuaW1wb3J0IGF1dG9QcmVmaXggZnJvbSBcImF1dG9wcmVmaXhlclwiO1xuaW1wb3J0IHRzQ2hlY2tlciBmcm9tIFwidml0ZS1wbHVnaW4tY2hlY2tlclwiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCBkZXZUb29scyBmcm9tIFwidml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzXCI7XG5pbXBvcnQgYXV0b0ltcG9ydCBmcm9tIFwidW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZVwiO1xuaW1wb3J0IHZpdGVDb21wcmVzc2lvbiBmcm9tIFwidml0ZS1wbHVnaW4tY29tcHJlc3Npb25cIjtcbmltcG9ydCBDb21wb25lbnRzIGZyb20gXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlXCI7XG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBtb2RlIH0pID0+IHtcbiAgY29uc3QgVklURV9CQVNFX1VSTCA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSkuVklURV9CQVNFX1VSTDtcblxuICByZXR1cm4gZGVmaW5lQ29uZmlnKHtcbiAgICBiYXNlOiBcIi9cIixcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICBcIkBcIjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjXCIpLFxuICAgICAgICBcInZ1ZS1pMThuXCI6IFwidnVlLWkxOG4vZGlzdC92dWUtaTE4bi5janMucHJvZC5qc1wiLCAvL1x1ODlFM1x1NTFCM2k4blx1OEI2Nlx1NTQ0QVxuICAgICAgfSxcbiAgICB9LFxuICAgIHRlc3Q6IHtcbiAgICAgIGVudmlyb25tZW50OiBcImhhcHB5LWRvbVwiLFxuICAgICAgY292ZXJhZ2U6IHtcbiAgICAgICAgcHJvdmlkZXI6IFwiaXN0YW5idWxcIixcbiAgICAgICAgcmVwb3J0ZXI6IFtcInRleHRcIiwgXCJqc29uXCIsIFwiaHRtbFwiXSxcbiAgICAgICAgcmVwb3J0c0RpcmVjdG9yeTogXCIuL2NvdmVyYWdlXCIsXG4gICAgICAgIHBlckZpbGU6IHRydWUsXG4gICAgICAgIGxpbmVzOiA3NSxcbiAgICAgICAgZnVuY3Rpb25zOiA3NSxcbiAgICAgICAgYnJhbmNoZXM6IDc1LFxuICAgICAgICBzdGF0ZW1lbnRzOiA3NSxcbiAgICAgIH0sXG4gICAgICBvcGVuOiB0cnVlLFxuICAgICAgaW5jbHVkZTogW1wic3JjL3Rlc3QvKi50ZXN0LnRzXCJdLFxuICAgICAgZ2xvYmFsczogdHJ1ZSxcbiAgICB9LFxuICAgIGJ1aWxkOiB7XG4gICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgIG91dHB1dDoge1xuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiBcImFzc2V0cy9qcy9bbmFtZV0uanNcIixcbiAgICAgICAgICBjaHVua0ZpbGVOYW1lczogXCJhc3NldHMvanMvW25hbWVdLVtoYXNoXS5qc1wiLFxuICAgICAgICAgIGFzc2V0RmlsZU5hbWVzOiBcImFzc2V0cy9bZXh0XS9bbmFtZV0tW2hhc2hdLS5bZXh0XVwiLFxuICAgICAgICAgIG1hbnVhbENodW5rcyhpZCkge1xuICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKFwibm9kZV9tb2R1bGVzXCIpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBpZFxuICAgICAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgLnNwbGl0KFwibm9kZV9tb2R1bGVzL1wiKVsxXVxuICAgICAgICAgICAgICAgIC5zcGxpdChcIi9cIilbMF1cbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNlcnZlcjoge1xuICAgICAgcHJveHk6IHtcbiAgICAgICAgXCIvYXBpL1wiOiB7XG4gICAgICAgICAgdGFyZ2V0OiBWSVRFX0JBU0VfVVJMLFxuICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgXCJcIiksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgdnVlKCksXG4gICAgICBVbm9DU1MoKSxcbiAgICAgIGRldlRvb2xzKCksXG4gICAgICB2aXRlQ29tcHJlc3Npb24oKSxcbiAgICAgIHRzQ2hlY2tlcih7XG4gICAgICAgIHR5cGVzY3JpcHQ6IHRydWUsXG4gICAgICB9KSxcbiAgICAgIENvbXBvbmVudHMoe1xuICAgICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldLFxuICAgICAgfSksXG4gICAgICBhdXRvSW1wb3J0KHtcbiAgICAgICAgaW1wb3J0czogW1xuICAgICAgICAgIFwicGluaWFcIixcbiAgICAgICAgICBcInZ1ZS1pMThuXCIsXG4gICAgICAgICAgXCJ2dWUtcm91dGVyXCIsXG4gICAgICAgICAgXCJAdnVldXNlL2NvcmVcIixcbiAgICAgICAgICBcIkB2dWUvY29tcG9zaXRpb24tYXBpXCIsXG4gICAgICAgIF0sXG4gICAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXG4gICAgICB9KSxcbiAgICBdLFxuICAgIGNzczoge1xuICAgICAgcG9zdGNzczoge1xuICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgYXV0b1ByZWZpeCh7XG4gICAgICAgICAgICBvdmVycmlkZUJyb3dzZXJzbGlzdDogW1xuICAgICAgICAgICAgICBcIkFuZHJvaWQgNC4xXCIsXG4gICAgICAgICAgICAgIFwiaU9TIDcuMVwiLFxuICAgICAgICAgICAgICBcIkNocm9tZSA+IDMxXCIsXG4gICAgICAgICAgICAgIFwiZmYgPiAzMVwiLFxuICAgICAgICAgICAgICBcImllID49IDhcIixcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFFQSxPQUFPLFlBQVk7QUFDbkIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sU0FBUztBQUNoQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGVBQWU7QUFDdEIsU0FBUyxjQUFjLGVBQWU7QUFDdEMsT0FBTyxjQUFjO0FBQ3JCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8scUJBQXFCO0FBQzVCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsMkJBQTJCO0FBWnBDLElBQU0sbUNBQW1DO0FBY3pDLElBQU8sc0JBQVEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUMzQixRQUFNLGdCQUFnQixRQUFRLE1BQU0sUUFBUSxJQUFJLENBQUMsRUFBRTtBQUVuRCxTQUFPLGFBQWE7QUFBQSxJQUNsQixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLFFBQzdCLFlBQVk7QUFBQTtBQUFBLE1BQ2Q7QUFBQSxJQUNGO0FBQUEsSUFDQSxNQUFNO0FBQUEsTUFDSixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUixVQUFVO0FBQUEsUUFDVixVQUFVLENBQUMsUUFBUSxRQUFRLE1BQU07QUFBQSxRQUNqQyxrQkFBa0I7QUFBQSxRQUNsQixTQUFTO0FBQUEsUUFDVCxPQUFPO0FBQUEsUUFDUCxXQUFXO0FBQUEsUUFDWCxVQUFVO0FBQUEsUUFDVixZQUFZO0FBQUEsTUFDZDtBQUFBLE1BQ0EsTUFBTTtBQUFBLE1BQ04sU0FBUyxDQUFDLG9CQUFvQjtBQUFBLE1BQzlCLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTCxlQUFlO0FBQUEsUUFDYixRQUFRO0FBQUEsVUFDTixnQkFBZ0I7QUFBQSxVQUNoQixnQkFBZ0I7QUFBQSxVQUNoQixnQkFBZ0I7QUFBQSxVQUNoQixhQUFhLElBQUk7QUFDZixnQkFBSSxHQUFHLFNBQVMsY0FBYyxHQUFHO0FBQy9CLHFCQUFPLEdBQ0osU0FBUyxFQUNULE1BQU0sZUFBZSxFQUFFLENBQUMsRUFDeEIsTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUNaLFNBQVM7QUFBQSxZQUNkO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0wsU0FBUztBQUFBLFVBQ1AsUUFBUTtBQUFBLFVBQ1IsY0FBYztBQUFBLFVBQ2QsU0FBUyxDQUFDLFNBQVMsS0FBSyxRQUFRLFVBQVUsRUFBRTtBQUFBLFFBQzlDO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULGdCQUFnQjtBQUFBLE1BQ2hCLFVBQVU7QUFBQSxRQUNSLFlBQVk7QUFBQSxNQUNkLENBQUM7QUFBQSxNQUNELFdBQVc7QUFBQSxRQUNULFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLE1BQ25DLENBQUM7QUFBQSxNQUNELFdBQVc7QUFBQSxRQUNULFNBQVM7QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLE1BQ25DLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDSCxTQUFTO0FBQUEsUUFDUCxTQUFTO0FBQUEsVUFDUCxXQUFXO0FBQUEsWUFDVCxzQkFBc0I7QUFBQSxjQUNwQjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRixDQUFDO0FBQUEsUUFDSDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRixDQUFDO0FBQ0g7IiwKICAibmFtZXMiOiBbXQp9Cg==
