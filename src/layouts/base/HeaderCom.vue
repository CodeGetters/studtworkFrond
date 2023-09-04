<script setup lang="ts">
import { ref } from "vue";
import avatar from "@/assets/images/avatar.png";
import type { DropdownInstance } from "element-plus";
import { toggleDark } from "@/core/utils/themeAnimation";
import { displayHeader, headerBgc } from "@/core/helpers/config";

const dropdown = ref<DropdownInstance>();

const dialogVisible = ref(false);

function showClick() {
  if (!dropdown.value) return;
  dropdown.value.handleOpen();
}
</script>

<template>
  <div
    id="headerCom"
    v-if="displayHeader"
    :style="`background-color:${headerBgc}`"
    class="w100% h60px flex flex-row items-center justify-between px30px box-border"
  >
    <div
      class="hidden-xs-only w142px h100% flex flex-row items-center cursor-pointer"
    >
      <div class="logo w40px">
        <img src="/favicon.svg" alt="logo" class="w100% h100%" />
      </div>
      <div class="text-16px italic font-extrabold">StudTWork</div>
    </div>
    <div
      class="iconList flex flex-row"
      lg="w26% pr20px"
      xs="w100% justify-around"
    >
      <div class="item">
        <div i-ic:baseline-search />
      </div>
      <div class="item">
        <div i-iconoir:translate />
      </div>
      <div class="item">
        <div i-zondicons:notifications-outline />
      </div>
      <div class="item" @click="toggleDark">
        <div i-carbon-sun dark:i-carbon-moon />
      </div>
      <div class="item" @click="dialogVisible = true">
        <div i-ic:outline-settings />
      </div>

      <el-dropdown
        ref="dropdown"
        trigger="contextmenu"
        style="margin-right: 30px"
      >
        <div
          class="avatarCon hidden-xs-only flex flex-row rounded-50px items-center whitespace-nowrap cursor-pointer"
          @click="showClick"
        >
          <div class="nickName m6px">张三李四啊xxx</div>
          <div class="avatar">
            <img :src="avatar" alt="avatar" />
          </div>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="w220px">
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item>Action 4</el-dropdown-item>
            <el-dropdown-item>Action 5</el-dropdown-item>
            <el-dropdown-item>Action 6</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <el-dialog v-model="dialogVisible" title="设置" width="30%">
        <span>This is a message</span>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="dialogVisible = false">
              Confirm
            </el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<style scoped>
.item {
  width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  font-size: 14px;
  border-radius: 50%;
  margin-right: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}
</style>
