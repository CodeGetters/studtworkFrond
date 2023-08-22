import { ref } from "vue";
import { defineStore } from "pinia";
import objectPath from "object-path";
import defaultConfig from "@/core/config/defaultConfig";
import type defaultConfigTypes from "@/core/config/configType";

export const CONFIG_NAME_KEY = "config";

export const useConfigStore = defineStore("config", () => {
  const config = ref<defaultConfigTypes>(defaultConfig);
  const initial = ref<defaultConfigTypes>(defaultConfig);

  // 获取默认布局配置的属性
  function getDefaultConfig(path: string, defaultValue?: string) {
    console.log("config", config.value, path, defaultConfig);
    return objectPath.get(config.value, path, defaultValue);
  }

  // 修改默认布局配置
  function setDefaultConfigProperty(property: string, value: any) {
    objectPath.set(config.value, property, value);
    localStorage.setItem(CONFIG_NAME_KEY, JSON.stringify(config.value));
  }

  // 重置布局配置
  function resetDefaultConfig(): void {
    // 将一个或者多个源对象中所有可枚举的自有属性复制到目标对象，并返回修改后的目标对象。
    config.value = Object.assign({}, initial.value);
  }

  // 覆盖默认布局配置
  function overrideLayoutConfig(): void {
    config.value = initial.value = Object.assign(
      {},
      initial.value,
      JSON.parse(window.localStorage.getItem(CONFIG_NAME_KEY) || "{}"),
    );
  }

  return {
    getDefaultConfig,
    overrideLayoutConfig,
    resetDefaultConfig,
    setDefaultConfigProperty,
  };
});
