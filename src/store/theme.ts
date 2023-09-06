import { ref } from "vue";
import { defineStore } from "pinia";

export const THEME_MODE = "vueuse-color-scheme";

export const useThemeStore = defineStore("theme", () => {
  const mode = ref<"auto" | "dark">(
    localStorage.getItem(THEME_MODE) as "auto" | "dark",
  );
  function setThemeMode(payload: "auto" | "dark") {
    const currentMode = payload;

    localStorage.setItem(THEME_MODE, currentMode);
    mode.value = currentMode;
  }

  return { mode, setThemeMode };
});
