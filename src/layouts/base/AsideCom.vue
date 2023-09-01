<script setup lang="ts">
import { useConfigStore } from "@/store/config";
import { Menu as IconMenu, Location } from "@element-plus/icons-vue";
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
        default-active="2"
        class="h100% relative"
        :text-color="asideColor"
        :collapse="asideCollapse"
        :background-color="asideBgc"
        :popper-effect="asidePopperEffect"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>分析看板</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
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

<style scoped lang="scss">
.el-menu {
  transition: all 0.3s ease;
}

:deep(.el-menu-item):hover {
  background-color: #d1e3fc;
}
.dark #asideCom {
  :deep(.el-menu) {
    border-right: 1px solid #626262;
  }
  :deep(.el-menu-item):hover {
    background-color: #1f3a60;
  }
}
</style>
