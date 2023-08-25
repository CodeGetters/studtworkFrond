<script setup lang="ts">
const { locale, t } = useI18n();
import { useI18n } from "vue-i18n";
import { toggleDark } from "@/core/utils/themeAnimation";
import { asideTopLayout } from "@/core/helpers/config";
import { useConfigStore } from "@/store/config";

const configStore = useConfigStore();

/**
 * @description 语言切换
 */
const changeLang = () => {
  locale.value === "zh" ? (locale.value = "en") : (locale.value = "zh");
};

const changeLayout = (): void => {
  configStore.setDefaultConfigProperty(
    "mainLayout.asideTop",
    !asideTopLayout.value,
  );
};
</script>

<template>
  <div id="dashboardCom">
    <button @click="changeLayout()">切换布局</button>
    <span bg-red>{{ t("hello") }}</span>
    <button @click="changeLang()">语言切换{{ locale }}</button>
    <button @click="toggleDark">主题切换</button>
    <span class="text-red">当前页面 home</span>
    <router-link to="/404" text-black>前往 notFound</router-link>
  </div>
</template>

<style lang="scss" scoped></style>
