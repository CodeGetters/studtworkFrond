<script setup lang="ts">
import { useConfigStore } from "@/store/config";
import { Menu as IconMenu } from "@element-plus/icons-vue";
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
        <el-menu-item index="1">
          <el-icon><icon-menu /></el-icon>
          <template #title>数据面板</template>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <template #title>Navigator Two</template>
        </el-menu-item>
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
