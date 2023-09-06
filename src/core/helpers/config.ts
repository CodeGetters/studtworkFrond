import { computed } from "vue";
import { useConfigStore } from "@/store/config";

export const themeConfigValue = computed<"auto" | "dark">(() => {
  return useConfigStore().getDefaultConfig("theme")
    ? (useConfigStore().getDefaultConfig("theme") as "auto" | "dark")
    : "auto";
});

/**
 * Returns layout config
 * @returns {object}
 */
export const config = computed(() => {
  return useConfigStore().config;
});

/**
 * Get the header display
 * @returns {boolean}
 */
export const displayHeader = computed(() => {
  return useConfigStore().getDefaultConfig("headers.display");
});

/**
 * Get the header bgc
 * @returns {boolean}
 */
export const headerBgc = computed(() => {
  return useConfigStore().getDefaultConfig("headers.backgroundColor");
});

/**
 * Get the aside display
 * @returns {boolean}
 */
export const displayAside = computed(() => {
  return useConfigStore().getDefaultConfig("aside.display");
});

/**
 * Get the aside collapse
 * @returns {boolean}
 */
export const asideCollapse = computed(() => {
  return useConfigStore().getDefaultConfig("aside.collapse");
});

/**
 * Get the aside bgc
 * @return {string}
 */
export const asideBgc = computed(() => {
  return useConfigStore().getDefaultConfig("aside.backgroundColor");
});

/**
 * Get the aside color
 * @return {string}
 */
export const asideColor = computed(() => {
  return useConfigStore().getDefaultConfig("aside.textColor");
});

/**
 * Get the aside popperEffect
 * @return {string}
 */
export const asidePopperEffect = computed(() => {
  return useConfigStore().getDefaultConfig("aside.popperEffect");
});

/**
 * Get the mainLayout
 * @returns {boolean}
 */
export const asideTopLayout = computed(() => {
  return useConfigStore().getDefaultConfig("mainLayout.asideTop");
});

/**
 * Get the main bgc
 * @returns {string}
 */
export const mainBgc = computed(() => {
  return useConfigStore().getDefaultConfig("mainLayout.backgroundColor");
});
