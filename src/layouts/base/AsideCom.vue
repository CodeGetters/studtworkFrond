<script setup lang="ts">
import { ref, computed } from "vue";
import { Menu as IconMenu, Location } from "@element-plus/icons-vue";
import { useConfigStore } from "@/store/config";

const configStore = useConfigStore();

const setMode = computed(() => {
  return configStore.setDefaultConfigProperty("aside.backgroundColor", "#fff");
});

const isCollapse = ref<boolean>(true);
</script>

<template>
  <div id="asideCom">
    <el-aside width="auto" class="h100%" bg-blueGray>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo h100%"
        :collapse="isCollapse"
        popper-effect="light"
        :background-color="setMode"
        text-color="#fff"
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
          <el-switch v-model="isCollapse" />
        </el-menu-item>
      </el-menu>
    </el-aside>
  </div>
</template>
