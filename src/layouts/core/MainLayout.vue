<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import HeaderCom from "@/layouts/base/HeaderCom.vue";
import AsideCom from "@/layouts/base/AsideCom.vue";
import { asideTopLayout, mainBgc } from "@/core/helpers/config";

const router = useRouter();
const loading = ref<boolean>(false);

watch(
  () => router.currentRoute.value.path,
  (newValue, oldValue) => {
    setTimeout(() => {
      loading.value = false;
    }, 1000);
    loading.value = true;
    console.log(`router address changed from ${oldValue} to ${newValue}`);
  },
  { immediate: true },
);
</script>

<template>
  <div id="homePage">
    <!-- 布局一 -->
    <el-container v-if="asideTopLayout">
      <el-header flex flex-row height="auto">
        <HeaderCom />
      </el-header>
      <el-container h92vh>
        <AsideCom />
        <el-container>
          <el-main
            element-loading-text="Loading..."
            v-loading="loading"
            :style="`background-color: ${mainBgc};`"
          >
            <router-view class="w100% h100%" />
          </el-main>
        </el-container>
      </el-container>
    </el-container>

    <!-- 布局二 -->
    <el-container v-else>
      <el-container h100vh>
        <AsideCom />
        <el-container>
          <el-header height="auto">
            <HeaderCom />
          </el-header>
          <el-main
            element-loading-text="Loading..."
            v-loading="loading"
            :style="`background-color: ${mainBgc};`"
          >
            <router-view class="w100% h100%" />
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss">
.el-header {
  padding: 0;
}

.dark #homePage {
  background-color: black;
  color: #fff;
}

el-aside[deep],
el-container[deep],
el-header[deep] {
  background-color: black;
  color: #fff;
}
</style>
