<script setup lang="ts">
import { ref } from "vue";
import HeaderCom from "@/layouts/HeaderCom.vue";
import AsideCom from "@/layouts/AsideCom.vue";
import MainCom from "@/layouts/MainCom.vue";

// 切换布局
// TODO：手机单不支持切换布局
const headerLayout = ref<boolean>(true);
</script>

<template>
  <div id="homePage">
    <!-- 布局一 -->
    <el-container v-show="headerLayout">
      <el-header flex flex-row height="auto">
        <HeaderCom />
      </el-header>
      <el-container h92vh>
        <AsideCom />
        <el-container>
          <el-switch v-model="headerLayout" />
          <MainCom />
        </el-container>
      </el-container>
    </el-container>

    <!-- 布局二 -->
    <el-container v-show="!headerLayout">
      <el-container h100vh>
        <AsideCom />
        <el-container>
          <el-header height="auto">
            <HeaderCom />
          </el-header>
          <el-switch v-model="headerLayout" />
          <MainCom />
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
