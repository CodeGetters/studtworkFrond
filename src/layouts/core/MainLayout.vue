<script setup lang="ts">
import HeaderCom from "@/layouts/base/HeaderCom.vue";
import AsideCom from "@/layouts/base/AsideCom.vue";
import { asideTopLayout, mainBgc } from "@/core/helpers/config";
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
          <el-main :style="`background-color: ${mainBgc};`">
            <router-view />
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
          <el-main :style="`background-color: ${mainBgc};`">
            <router-view />
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
