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
        class="el-menu-vertical-demo h100%"
        :text-color="asideColor"
        :collapse="asideCollapse"
        :background-color="asideBgc"
        :popper-effect="asidePopperEffect"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
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
        <el-menu-item>
          <button @click="setCollapse">切换</button>
        </el-menu-item>
      </el-menu>
    </el-aside>
  </div>
</template>
