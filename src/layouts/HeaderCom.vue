<script setup lang="ts">
import { toggleDark } from "@/core/utils/themeAnimation";
</script>

<template>
  <div
    id="headerCom"
    class="w100% h60px flex flex-row items-center justify-between border-b-#0f172a1a border-1px border-solid"
  >
    <div class="logoBox hidden-xs-only">
      <div class="logo">
        <img src="/favicon.svg" alt="" />
      </div>
      <div class="desc">StudTWork</div>
    </div>
    <!-- xs:w100% xs:justify-around -->
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
      <div class="item">
        <div i-carbon-sun dark:i-carbon-moon @click="toggleDark" />
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
}
.iconList .item:last-child {
  margin-right: 0;
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
