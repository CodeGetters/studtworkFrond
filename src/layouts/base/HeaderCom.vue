<script setup lang="ts">
import { toggleDark } from "@/core/utils/themeAnimation";
import { displayHeader } from "@/core/helpers/config";
</script>

<template>
  <div
    id="headerCom"
    v-if="displayHeader"
    class="w100% h60px flex flex-row items-center justify-between px30px"
  >
    <div class="logoBox hidden-xs-only">
      <div class="logo">
        <img src="/favicon.svg" alt="" />
      </div>
      <div class="desc">StudTWork</div>
    </div>
    <div
      class="iconList flex flex-row lg:w18% lg:pr20px xs:w100% xs:justify-around"
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
      <div class="item">
        <div i-ic:outline-settings />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#headerCom {
  box-sizing: border-box;
  border: 1px solid #0f172a1a;
}

.iconList .item:last-child {
  margin-right: 0;
}

.desc {
  font-size: 16px;
}

.item {
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  border-radius: 50%;
  margin-right: 16px;
  background-color: #f2f3f5;
  cursor: pointer;
  transition: all 0.3s ease;
}

.item:hover {
  background-color: #e6eef5;
}

.dark .item {
  background-color: black;
}

.logoBox {
  width: 142px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  .logo {
    width: 40px;
    img {
      width: 100%;
      height: 100%;
    }
    .desc {
      font-size: 16px;
      font-style: italic;
      font-weight: 800;
      line-height: normal;
    }
  }
}
</style>
