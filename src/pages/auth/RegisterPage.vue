<script lang="ts" setup>
import { reactive, ref } from "vue";
import { toggleDark } from "@/core/utils/themeAnimation";
import type { FormInstance, FormRules } from "element-plus";
import { useRouter } from "vue-router";

const router = useRouter();

const registerForm = reactive({
  username: "",
  password: "",
  confirmPassword: "",
});

const registerFormRef = ref<FormInstance>();

const validateUser = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("Please input the username"));
  } else {
    if (registerForm.password !== "") {
      if (!registerFormRef.value) return;
      registerFormRef.value.validateField("password", () => null);
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

const validatePassword = (rule: any, value: string, callback: Function) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,14}$/;
  if (!passwordRegex.test(value)) {
    callback(new Error("密码必须为6-14位大小写字母数字混合"));
  } else {
    callback();
  }
};

const rules = reactive<FormRules<typeof registerForm>>({
  username: [{ validator: validateUser, trigger: "blur", required: true }],
  password: [
    { validator: validatePass, trigger: "blur", required: true },
    { validator: validatePassword, trigger: "blur", required: true },
  ],
  confirmPassword: [
    { validator: validatePass, trigger: "blur", required: true },
    { validator: validatePassword, trigger: "blur", required: true },
  ],
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
  <!--registration::begin-->
  <div class="register w74% h70% px13% py13% relative">
    <div class="form-title font-600 text-center">注册</div>
    <!--From::begin-->
    <el-form
      ref="registerFormRef"
      :model="registerForm"
      :rules="rules"
      status-icon
      class="mt7%"
      label-position="top"
      style="
        color: var(--2, #031f47);

        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 0px;
      "
    >
      <el-form-item label="账号或用户名" class="form-item" prop="username">
        <el-input
          placeholder="请输入用户名/手机号/邮箱号"
          v-model="registerForm.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" class="form-item" prop="password">
        <el-input
          placeholder="请输入密码"
          type="password"
          v-model="registerForm.password"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item label="确认密码" prop="confirmPassword" class="form-item">
        <el-input
          placeholder="请再次输入密码"
          type="password"
          v-model="registerForm.confirmPassword"
          autocomplete="off"
        />
      </el-form-item>
      <!--from::end -->
      <el-form-item>
        <button
          type="submit"
          ref="submitButton"
          class="submitButton w100% mt-16px h40px rounded-50px cursor-pointer text-#fff"
        >
          <span> Continue </span>
          <span style="display: none"> Please wait... </span>
        </button>
      </el-form-item>
    </el-form>
  </div>
  <!--registerFrom::end-->
</template>

<style scoped lang="scss">
.font-600 {
  font-size: 35px;
  // font-family: Cascadia Code;
}

.submitButton {
  margin-top: 40px;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #38a7f8 24.58%, #5074f5 100%), #031f47;
}

.submitButton:hover {
  background: linear-gradient(135deg, #6fbaef 24.58%, #748eed 100%), #031f47;
}

.form-item {
  height: 44%;
  font-size: 24px;
  font-style: normal;
}
</style>
