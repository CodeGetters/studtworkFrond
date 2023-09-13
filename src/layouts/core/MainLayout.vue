<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import HeaderCom from "@/layouts/base/HeaderCom.vue";
import AsideCom from "@/layouts/base/AsideCom.vue";
import { asideTopLayout } from "@/core/helpers/config";

const router = useRouter();
const loading = ref<boolean>(false);

const wsServer = new WebSocket("ws://localhost:5000");

const submitCode = JSON.stringify({
  userId: 1,
  isDebug: "0",
  lang: "zh",
  code: "test",
  info: "info",
});

onMounted(() => {
  wsServer.onopen = function () {
    console.log("ws already connected");
    wsServer.send(submitCode);
  };
});

onBeforeUnmount(() => {
  wsServer.onclose = function () {
    wsServer.send("连接关闭...");
  };
});

wsServer.onmessage = function (e) {
  console.log(e.data);
};

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
          <el-main element-loading-text="Loading..." v-loading="loading">
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
          <el-main element-loading-text="Loading..." v-loading="loading">
            <router-view class="w100% h100%" />
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.el-header {
  padding: 0;
}

.el-main {
  background-color: #f7f8fa;
}

.dark #homePage {
  background-color: black;
  color: #fff;

  .el-main {
    background-color: #2f3743;
  }
}

el-aside[deep],
el-container[deep],
el-header[deep] {
  color: #fff;
}
</style>
