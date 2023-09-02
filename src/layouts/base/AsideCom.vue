<script setup lang="ts">
import { useConfigStore } from "@/store/config";
import { List, Edit } from "@element-plus/icons-vue";
import {
  asideBgc,
  asideColor,
  displayAside,
  asideCollapse,
  asidePopperEffect,
} from "@/core/helpers/config";

const configStore = useConfigStore();

const setCollapse = (): void => {
  configStore.setDefaultConfigProperty("aside.collapse", !asideCollapse.value);
};
</script>

<template>
  <div id="asideCom" v-if="displayAside">
    <el-aside width="auto" class="h100%">
      <el-menu
        default-active="1"
        class="el-menu-vertical h100% relative"
        :text-color="asideColor"
        :collapse="asideCollapse"
        :background-color="asideBgc"
        :popper-effect="asidePopperEffect"
      >
        <router-link to="/dashboard">
          <el-menu-item index="1">
            <el-icon><div i-mdi:view-dashboard-outline /></el-icon>
            <template #title>数据面板</template>
          </el-menu-item>
        </router-link>
        <router-link to="/articleList">
          <el-menu-item index="2">
            <el-icon><List /></el-icon>
            <template #title>文章列表</template>
          </el-menu-item>
        </router-link>
        <router-link to="/editArticle">
          <el-menu-item index="3">
            <el-icon><Edit /></el-icon>
            <template #title>创建文章</template>
          </el-menu-item>
        </router-link>
        <el-sub-menu index="4">
          <template #title>
            <el-icon
              ><div
                i-streamline:ecology-science-erlenmeyer-flask-experiment-lab-flask-science-chemistry-solution
            /></el-icon>
            <span>实验内容</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">item two</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <div absolute class="w100% top-96% flex justify-end">
          <div
            v-if="asideCollapse"
            cursor-pointer
            :style="`background-color: ${asideColor};`"
            i-zondicons:align-left
            @click="setCollapse"
          />
          <div
            v-else
            cursor-pointer
            :style="`background-color: ${asideColor};`"
            @click="setCollapse"
            i-zondicons:align-right
          />
        </div>
      </el-menu>
    </el-aside>
  </div>
</template>
