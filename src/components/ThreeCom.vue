<script setup lang="ts">
import { onMounted } from "vue";
import { Three } from "@/core/utils/three/world/three";

async function main() {
  const container: HTMLElement | null = document.getElementById("scene");

  if (container) {
    const three = new Three(container);

    await three.init();

    three.start();
  }
}

onMounted(() => {
  main();
});
</script>

<template>
  <!-- <div id="modelContainer"></div> -->
  <div id="scene"></div>
</template>

<style scoped lang="scss">
// #threeCom {
//   // width: 200px;
//   // height: 270px;
//   // layout:容器外部的布局不会影响它内部的布局
//   // inline-size:容器在宽度上不会被子元素撑开
//   contain: layout inline-size;
//   background-color: rgb(170, 215, 241);
// }

#scene {
  // width: 200px;
  // height: 300px;
  width: 100%;
  height: 100%;
}
</style>
