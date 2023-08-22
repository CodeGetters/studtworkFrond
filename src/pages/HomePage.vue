<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { locale, t } = useI18n();
import { toggleDark } from "@/core/utils/themeAnimation";

import HeaderCom from "@/layouts/HeaderCom.vue";

/**
 * @description 语言切换
 */
const changeLang = () => {
  locale.value === "zh" ? (locale.value = "en") : (locale.value = "zh");
};
</script>

<template>
  <div class="home .dark:bg-black .dark:text-#fff">
    <HeaderCom />
    <div class="pageChange">
      <span class="text-red">当前页面 home</span>
      <router-link to="/404" text-lightBlue>前往 notFound</router-link>
    </div>
    <span bg-red>{{ t("hello") }}</span>
    <button @click="changeLang()">语言切换{{ locale }}</button>
    <button @click="toggleDark">主题切换</button>
    <!-- <span bg="blue-400 hover:blue-500">预设</span> -->
  </div>
</template>
<style lang="scss">
.home {
  height: 100vh;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
}

button {
  width: 100px;
}
</style>
