<script setup lang="ts">
import ThreeCom from "@/components/ThreeCom.vue";
</script>

<template>
  <div id="threeContainer">
    <div class="demoContainer">
      <div class="item">
        <!-- three 组件有 id 唯一性问题，所以不能重复 -->
        <div class="showThree">
          <ThreeCom />
        </div>
        <div class="descBox flex flex-col">
          <div class="title">标题</div>
          <div class="desc">描述</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#threeContainer {
  width: 100%;
  height: 100%;
  background-color: #fff;
  width: 100%;
  height: 100%;

  .demoContainer {
    width: 98%;
    height: 98%;
    padding: 1%;
    display: flex;
    flex-direction: row;
    .item {
      width: 20%;
      height: 400px;
      border-radius: 5px;
      background-color: steelblue;
      margin-right: 10px;
      .showThree {
        width: 100%;
        height: 75%;
      }
      .descBox {
        width: 100%;
        height: 25%;
      }
    }
  }
}
</style>
