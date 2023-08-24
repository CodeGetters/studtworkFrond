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
  <router-view v-slot="{ Component }">
    <transition>
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss">
@import "normalize.css";
@import "@/assets/styles/normal.css";
</style>
