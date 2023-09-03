<script setup lang="ts">
import { ref } from "vue";
import { Editor } from "@bytemd/vue-next";

import gfm from "@bytemd/plugin-gfm";
import highlight from "@bytemd/plugin-highlight";
import frontmatter from "@bytemd/plugin-frontmatter";
import gemoji from "@bytemd/plugin-gemoji";

import "bytemd/dist/index.css";
import "github-markdown-css/github-markdown.css";

const plugins = [gfm(), highlight(), gemoji(), frontmatter()];

const article = ref<string>("");
const config = {
  lineNumbers: true,
};
</script>
<template>
  <div id="viewArticle" flex>
    <Editor
      class="w100% h96% bg-#fff p1%"
      :plugins="plugins"
      :value="article"
      :editorConfig="config"
    />
  </div>
</template>

<style scoped></style>
