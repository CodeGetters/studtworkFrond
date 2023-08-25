<script setup lang="ts">
import { onBeforeMount, onMounted, nextTick } from "vue";
import "element-plus/theme-chalk/display.css";
import { useConfigStore } from "./store/config";
import { useBodyStore } from "./store/body";
const bodyStore = useBodyStore();

const configStore = useConfigStore();

onBeforeMount(() => {
  configStore.overrideLayoutConfig();
});

onMounted(() => {
  nextTick(() => {
    bodyStore.removeBodyClassName("page-loading");
  });
});
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
@import "normalize.css";
@import "./assets/styles/scss/init.scss";
@import "@/assets/styles/normal.css";
</style>
