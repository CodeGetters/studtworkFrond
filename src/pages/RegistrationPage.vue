<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { useRouter } from "vue-router";

const router = useRouter();

const registerForm = reactive({
  username: "",
  password: "",
  confirmPassword: "",
});

const validateUser = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("Please input the username"));
  } else {
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
  username: [{ validator: validateUser, trigger: "url", required: true }],
  password: [
    { validator: validatePass, trigger: "url", required: true },
    { validator: validatePassword, trigger: "url", required: true },
  ],
  confirmPassword: [
    { validator: validatePass, trigger: "url", required: true },
    { validator: validatePassword, trigger: "change", required: true },
  ],
});
</script>

<template>
  <div class="redister h100vh flex justify-center items-center">
    <!--registration::begin-->
    <div
      class="w45% h70% flex flex-row overflow-hidden rounded-10px bg-#fff flex-col items-center"
    >
      <div class="w74% h70% px13% py13% relative">
        <div class="form-title font-600 text-center">注册</div>
        <!--From::begin-->
        <el-form
          :model="registerForm"
          status-icon
          class="mt7%"
          label-position="top"
          style="
            color: var(--2, #031f47);
            font-family: Cascadia Code;
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: 0px;
          "
        >
          <el-form-item label="账号或用户名" prop="username" class="form-item">
            <el-input
              placeholder="请输入用户名/手机号/邮箱号"
              v-model="registerForm.username"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" class="form-item">
            <el-input
              placeholder="请输入密码"
              type="password"
              v-model="registerForm.password"
              autocomplete="off"
            />
          </el-form-item>
          <el-form-item
            label="确认密码"
            prop="confirmPassword"
            class="form-item"
          >
            <el-input
              placeholder="请再次输入密码"
              type="password"
              v-model="registerForm.confirmPassword"
              autocomplete="off"
            />
          </el-form-item>
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
    </div>
  </div>
</template>

<style scoped lang="scss">
.redister {
  padding: 0% 13%;
  background: linear-gradient(
    45deg,
    #c1deff 4.69%,
    #e0eeff 26.56%,
    #e5f8fb 87.13%
  );

  .font-600 {
    font-size: 35px;
    font-family: Cascadia Code;
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
    margin: 0 0 18px;
    height: 50px;
    flex-shrink: 0;
  }
}
</style>
