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

const validatePassword = (rule, value, callback) => {
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
</script>

<template>
  <!--registration::begin-->
  <div class="register w74% h70% px13% py8% relative">
    <div class="font-600 text-center text-30px">注册</div>
    <!--From::begin-->
    <el-form
      ref="registerFormRef"
      :model="registerForm"
      :rules="rules"
      status-icon
      class="mt2% text-24px font-600"
      label-position="top"
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

      <div class="w100% flex flex-row justify-between">
        <router-link to="/sign-in" class="text-#A5AFBD text-14px">
          已有账号，<span text="#4E7AF6">去登录</span>
        </router-link>
      </div>
      <!--from::end -->
      <el-form-item>
        <button
          type="submit"
          ref="submitButton"
          class="submitButton w100% mt-16px h40px rounded-50px cursor-pointer text-#fff"
          @click="router.push({ path: '/dashboard' })"
        >
          <span> Continue </span>
          <span style="display: none"> Please wait... </span>
        </button>
      </el-form-item>
    </el-form>
    <div class="config-btn flex flex-row w15% justify-around" absolute>
      <div i-iconoir:translate class="btn dark:text-black" />

      <div
        i-carbon-sun
        dark:i-carbon-moon
        class="btn dark:text-black"
        @click="toggleDark"
      />
    </div>
  </div>
  <!--registerFrom::end-->
</template>

<style scoped lang="scss">
.config-btn {
  position: absolute;
  margin-left: 65%;

  .form-item {
    height: 44%;
    font-size: 24px;
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
