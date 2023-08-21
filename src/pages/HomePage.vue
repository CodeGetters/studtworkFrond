<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { locale, t } = useI18n();

/**
 * @description 语言切换
 */
const changeLang = () => {
  locale.value === "zh" ? (locale.value = "en") : (locale.value = "zh");
};
</script>

<template>
  <div class="home">
    <span>home</span>
    <span @click="changeLang()">{{ t("hello") }}</span>
    <router-link to="/404">notFound</router-link>
  </div>
</template>
