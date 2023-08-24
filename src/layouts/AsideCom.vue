<script setup lang="ts">
import { Menu as IconMenu, Location } from "@element-plus/icons-vue";
import { ref } from "vue";
const isCollapse = ref<boolean>(true);

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<template>
  <div id="asideCom">
    <el-aside width="auto" class="h100%" bg-blueGray>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo h100%"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
        popper-effect="light"
        background-color="black"
        text-color="#fff"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group>
            <template #title><span>Group One</span></template>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title><span>item four</span></template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <template #title>Navigator Two</template>
        </el-menu-item>
        <el-menu-item>
          <el-switch v-model="isCollapse" />
        </el-menu-item>
      </el-menu>
    </el-aside>
  </div>
</template>
