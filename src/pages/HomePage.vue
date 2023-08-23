<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";

import { ref } from "vue";
const { locale, t } = useI18n();
import { useI18n } from "vue-i18n";
import HeaderCom from "@/layouts/HeaderCom.vue";
import { toggleDark } from "@/core/utils/themeAnimation";

/**
 * @description 语言切换
 */
const changeLang = () => {
  locale.value === "zh" ? (locale.value = "en") : (locale.value = "zh");
};

const isCollapse = ref(true);

// 切换布局
// TODO：手机单不支持切换布局
const headerLayout = ref(true);

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<template>
  <div id="homePage">
    <el-container v-show="headerLayout">
      <el-header flex flex-row height="auto">
        <HeaderCom />
      </el-header>
      <el-container h92vh>
        <!-- mobile:150px -->
        <!-- pc:200px -->
        <el-aside width="auto" bg-blueGray>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo h100%"
            :collapse="isCollapse"
            @open="handleOpen"
            @close="handleClose"
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
            <el-menu-item index="3" disabled>
              <el-icon><document /></el-icon>
              <template #title>Navigator Three</template>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><setting /></el-icon>
              <template #title>Navigator Four</template>
            </el-menu-item>
            <el-menu-item>
              <el-switch v-model="isCollapse" />
            </el-menu-item>
          </el-menu>
        </el-aside>

        <el-container>
          <el-main>
            切换布局
            <el-switch v-model="headerLayout" />
            <span bg-red>{{ t("hello") }}</span>
            <button @click="changeLang()">语言切换{{ locale }}</button>
            <button @click="toggleDark">主题切换</button>
            <span class="text-red">当前页面 home</span>
            <router-link to="/404" text-black>前往 notFound</router-link>
          </el-main>
        </el-container>
      </el-container>
    </el-container>

    <el-container v-show="!headerLayout">
      <el-container h100vh>
        <el-aside width="auto" bg-blueGray>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo h100%"
            :collapse="isCollapse"
            @open="handleOpen"
            @close="handleClose"
          >
            <!-- TODO:这里放 logo -->
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
        <el-container>
          <el-header height="auto"><HeaderCom /></el-header>
          <el-main>
            <!-- 切换时需要过渡效果(函数) -->
            切换布局
            <el-switch v-model="headerLayout" />
            <span bg-red>{{ t("hello") }}</span>
            <button @click="changeLang()">语言切换111{{ locale }}</button>
            <button @click="toggleDark">主题切换111</button>
            <span class="text-red">当前页面111 home</span>
            <router-link to="/404" text-black>前往 notFound</router-link>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.el-header {
  padding: 0;
}
.dark #homePage {
  background-color: black;
  color: #fff;
}

el-container[deep],
el-header[deep] {
  background-color: black;
  color: #fff;
}
</style>
