<script setup lang="ts">
import { ref, onMounted } from "vue";
import { i18n } from "@/core/i18n/index";
import { Editor } from "@bytemd/vue-next";

import en from "bytemd/locales/en.json";
import zh from "bytemd/locales/zh_Hans.json";

import gfm from "@bytemd/plugin-gfm";
import gemoji from "@bytemd/plugin-gemoji";
import highlight from "@bytemd/plugin-highlight";
import frontmatter from "@bytemd/plugin-frontmatter";

import "bytemd/dist/index.css";
import "github-markdown-css/github-markdown-light.css";
import "highlight.js/styles/default.css";

const articleTitle = ref<string>("");
const articleValue = ref<string>("");

const plugins = [gfm(), gemoji(), highlight(), frontmatter()];

const handleChange = (val: string): void => {
  articleValue.value = val;
};

const dialogVisible = ref(false);

// TODO：这里应该读取 localStorage 中的 lang 来设置语言
const lang = ref(zh);

const changeLang = (): void => {
  if (i18n.global.locale.value === "en") {
    lang.value = en;
  } else {
    lang.value = zh;
  }
};

// editor config link https://codemirror.net/5/doc/manual.html#config
const config = {
  lineNumbers: true,
  scrollbarStyle: null,
  spellcheck: true,
  autofocus: true,
};

onMounted(() => {
  changeLang();
});

// TODO：需要解决文件上传
</script>
<template>
  <div id="editArticle" flex flex-col>
    <div class="articleInfo w100% h70px flex flex-row items-center bg-#fff">
      <el-input
        v-model="articleTitle"
        maxlength="30"
        placeholder="请输入文章名"
        show-word-limit
        type="text"
        class="h94%"
      />
      <div class="buttonGroup w20% mx20px">
        <el-button type="primary" plain>草稿箱</el-button>
        <el-button type="primary">发布</el-button>
        <el-button
          ><div i-basil:exchange-solid @click="dialogVisible = true"
        /></el-button>
      </div>
    </div>
    <div class="articleCenter w100%">
      <Editor
        class="w100% h100%"
        :value="articleValue"
        :plugins="plugins"
        @change="handleChange"
        :locale="lang"
        placeholder="请在此处输入您的文章内容"
        :editorConfig="config"
      />
    </div>
    <el-dialog v-model="dialogVisible" title="切换为富文本编辑器" width="30%">
      <span>切换写作模式后，当前内容不会迁移，但会自动保存为草稿。</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
#editArticle {
  .articleCenter {
    :deep(.CodeMirror-gutter, .CodeMirror-linenumbers) {
      width: 0 !important;
    }
  }

  .articleInfo {
    :deep(.el-input__wrapper, .is-focus) {
      height: 100%;
      outline: none;
      border: none;
      border-image-width: 0;
      box-shadow: none;
      font-size: 25px;
    }
  }

  .articleCenter {
    height: calc(100% - 70px);

    :deep(.bytemd) {
      height: 100%;
    }
  }
}

.dark #editArticle {
  .articleInfo {
    color: #fff;
    background-color: #1f1f1f;

    :deep(.el-input__wrapper) {
      background-color: #1f1f1f;
      .el-input__inner {
        color: #fff;
      }

      .el-input__count-inner {
        color: #fff;
        background-color: #1f1f1f;
      }
    }
  }

  .articleCenter {
    :deep(.bytemd, .bytemd-split) {
      color: #fff;
      background-color: #1f1f1f;
      border-color: #1f1f1f;

      .bytemd-toolbar,
      .CodeMirror,
      .cm-s-default,
      .CodeMirror-scroll,
      .CodeMirror-wrap {
        caret-color: #fff;
        color: #fff;
        background-color: #1f1f1f;
      }

      .bytemd-preview,
      .markdown-body {
        color: #fff;
        background-color: #1f1f1f;
      }
    }
  }
}
</style>
