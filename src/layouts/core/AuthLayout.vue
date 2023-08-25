<script lang="ts" setup>
import logo from "/favicon.svg";
</script>

<template>
  <div id="loginPage" class="h100vh flex justify-center items-center">
    <div
      class="loginCon w100% lg:h67% xs:h60% flex flex-row overflow-hidden rounded-10px"
    >
      <!-- left::begin -->
      <div class="left h100% w100% flex-1 hidden-sm-and-down">
        <!-- logoCon::begin -->
        <div class="w52% h23% px-24% py-34% flex flex-col">
          <!-- logo::begin -->
          <div class="w100% h66% flex flex-row">
            <div class="h100% w31% mr-2%">
              <img :src="logo" alt="logo" class="w100% h100%" />
            </div>
            <span class="w67% h100% flex items-center text-38px italic"
              >StudTWork</span
            >
          </div>
          <!-- logo::end -->
          <span class="desc h77% text-#368CD9 text-28px mt-3%"
            >学生 用功 团队 协作</span
          >
        </div>
        <!-- logoCon::end -->
      </div>
      <!-- left::end -->

      <!-- right:begin -->
      <div class="right flex-1 h100% flex-col items-center">
        <router-view />
      </div>
      <!-- right::end -->
    </div>
    <div
      class="bottom-3% absolute flex flex-col text-#007fdf items-center select-none lg:text-18px xs:text-10px"
    >
      <div>
        <a href="javascript:;"><span>隐私内容</span></a> |<a
          href="javascript:;"
        >
          <span>政策协议</span>
        </a>
      </div>
      <div mt-10px>Copyright @ 2023 JohnsonXin & 泽泽 & Zooey</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#loginPage {
  padding: 0% 13%;
  position: relative;
}
</style>
