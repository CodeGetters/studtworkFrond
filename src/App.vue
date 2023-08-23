<script setup lang="ts">
import "element-plus/theme-chalk/display.css";
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss">
@import "normalize.css";
@import "@/assets/styles/normal.css";
</style>
