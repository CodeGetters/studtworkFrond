<script setup lang="ts">
import { ref } from "vue";
const { locale, t } = useI18n();
import { useI18n } from "vue-i18n";
import { toggleDark } from "@/core/utils/themeAnimation";

/**
 * @description 语言切换
 */
const changeLang = () => {
  locale.value === "zh" ? (locale.value = "en") : (locale.value = "zh");
};

// 切换布局
// TODO：手机单不支持切换布局
const headerLayout = ref(true);
</script>

<template>
  <div id="dashboardCom">
    切换布局
    <el-switch v-model="headerLayout" />
    <span bg-red>{{ t("hello") }}</span>
    <button @click="changeLang()">语言切换{{ locale }}</button>
    <button @click="toggleDark">主题切换</button>
    <span class="text-red">当前页面 home</span>
    <router-link to="/404" text-black>前往 notFound</router-link>
  </div>
</template>

<style lang="scss" scoped></style>
