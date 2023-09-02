<script setup lang="ts">
import { ref } from "vue";
import gfm from "@bytemd/plugin-gfm";
import { Editor } from "@bytemd/vue-next";
import "bytemd/dist/index.css";

const articleValue = ref<string>("");
const articleCon = ref<string>("");

const plugins = [gfm()];

const handleChange = (val: string): void => {
  articleValue.value = val;
};

const dialogVisible = ref(false);
</script>
<template>
  <div id="editArticle" flex flex-col>
    <div class="articleInfo w100% h70px flex flex-row items-center bg-#fff">
      <el-input
        v-model="articleCon"
        maxlength="30"
        placeholder="请输入文章内容"
        show-word-limit
        type="text"
        class="h100%"
      />
      <div class="buttonGroup w20% mx20px">
        <el-button>草稿箱</el-button>
        <el-button>发布</el-button>
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
</style>
