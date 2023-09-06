<script setup lang="ts">
import { ref } from "vue";
import { Viewer } from "@bytemd/vue-next";

import gfm from "@bytemd/plugin-gfm";
import highlight from "@bytemd/plugin-highlight";
import frontmatter from "@bytemd/plugin-frontmatter";
import gemoji from "@bytemd/plugin-gemoji";

import "bytemd/dist/index.css";
import "github-markdown-css/github-markdown-light.css";
import "highlight.js/styles/default.css";

const plugins = [gfm(), highlight(), gemoji(), frontmatter()];

const article = ref<string>("");
const config = {
  lineNumbers: true,
};
</script>
<template>
  <div id="viewArticle" flex>
    <Viewer
      class="w100% h96% p1%"
      :plugins="plugins"
      :value="article"
      :editorConfig="config"
    />
  </div>
</template>

<style scoped>
#viewArticle {
  color: #000;
  background-color: #fff;
}

.dark #viewArticle {
  color: #fff;
  background-color: #1f1f1f;
}
</style>
