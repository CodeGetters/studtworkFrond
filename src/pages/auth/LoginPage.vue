<script lang="ts" setup>
import { reactive, ref } from "vue";
import { toggleDark } from "@/core/utils/themeAnimation";
import type { FormInstance, FormRules } from "element-plus";
import { useRouter } from "vue-router";

const router = useRouter();

const ruleForm = reactive({
  username: "",
  password: "",
});

const ruleFormRef = ref<FormInstance>();

const validateUser = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("Please input the username"));
  } else {
    if (ruleForm.password !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("password", () => null);
    }
    callback();
  }
};

const validatePass = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("Please input the password"));
  } else {
    callback();
  }
};

const rules = reactive<FormRules<typeof ruleForm>>({
  username: [{ validator: validateUser, trigger: "blur", required: true }],
  password: [{ validator: validatePass, trigger: "blur", required: true }],
});

const submitAccount = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
      router.push({
        path: "/",
      });
    } else {
      console.log("error submit!");
      return false;
    }
  });
};
</script>

<template>
  <!-- loginForm::begin -->
  <div class="loginForm w74% h70% px13% py13% relative">
    <div
      text="35px center"
      class="font-600"
      @click="submitAccount(ruleFormRef)"
    >
      登录
    </div>

    <!-- form::begin -->
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      class="mt7%"
      label-position="top"
    >
      <el-form-item label="账号" class="form-item" prop="username">
        <el-input
          placeholder="请输入用户名/手机号/邮箱号"
          v-model="ruleForm.username"
          autocomplete="off"
          class="custom-input"
        />
      </el-form-item>
      <el-form-item label="密码" class="form-item" prop="password">
        <el-input
          placeholder="请输入密码"
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
        />
      </el-form-item>
    </el-form>
    <!-- form::end -->

    <div class="w100% flex flex-row justify-between">
      <span class="text-#A5AFBD">忘记密码</span>
      <router-link to="/" class="text-#A5AFBD">
        没有账号，<span text="#4E7AF6">去注册</span>
      </router-link>
    </div>

    <button
      type="submit"
      ref="submitButton"
      class="submitButton w100% lg:mt-30px xs:mt-40px h40px rounded-50px cursor-pointer text-#fff"
    >
      <span> Continue </span>
      <span style="display: none"> Please wait... </span>
    </button>

    <div class="config-btn flex flex-row w15% justify-around">
      <div i-iconoir:translate class="btn dark:text-black" />

      <div
        i-carbon-sun
        dark:i-carbon-moon
        class="btn dark:text-black"
        @click="toggleDark"
      />
    </div>
  </div>
  <!-- loginFrom::end -->
</template>

<style lang="scss" scoped>
.config-btn {
  position: absolute;
  margin-top: 8%;
  margin-left: 65%;

  .form-item {
    height: 44%;
    font-size: 24px;
    font-style: normal;
  }

  :deep(.el-form-item__label) {
    margin-bottom: 8px;
    font-size: 16px;
  }

  .submitButton {
    transition: all 0.3s ease;
  }

  .btn {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
}
</style>
