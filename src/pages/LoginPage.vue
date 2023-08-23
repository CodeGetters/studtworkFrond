<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
const ruleFormRef = ref<FormInstance>();

const validatePass = (rule: any, value: any, callback: any) => {
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
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password"));
  } else if (value !== ruleForm.username) {
    callback(new Error("Two inputs don't match!"));
  } else {
    callback();
  }
};
const ruleForm = reactive({
  username: "",
  password: "",
});

const rules = reactive<FormRules<typeof ruleForm>>({
  username: [{ validator: validatePass, trigger: "blur" }],
  password: [{ validator: validatePass2, trigger: "blur" }],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<template>
  <div class="loginPage">
    <div class="loginBox">
      <div class="left">
        <div class="logo">
          <div class="logo-top">
            <div class="logo-image">
              <img src="src\assets\images\logo.png" />
            </div>
            <div class="logo1">StudTWork</div>
          </div>
          <div class="logo-bottom">
            <div class="logo2 logo-container">学生 用功 团队协作</div>
          </div>
        </div>
      </div>

      <div class="right">
        <h1 class="loginTitlte">登录</h1>
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          status-icon
          :rules="rules"
          label-width="120px"
          class="demo-ruleForm"
          label-position="top"
        >
          <el-form-item label="账号" class="custom-label" prop="username">
            <el-input
              placeholder="请输入用户名/手机号/邮箱号"
              v-model="ruleForm.username"
              autocomplete="off"
              class="custom-input"
            />
          </el-form-item>
          <el-form-item label="密码" class="custom-label" prop="password">
            <el-input
              placeholder="请输入密码"
              v-model="ruleForm.password"
              type="password"
              autocomplete="off"
              :style="{ width: '530px', height: '50px' }"
            />
          </el-form-item>
        </el-form>
        <router-link
          class="forgot"
          to="/forgot-password"
          :style="{ marginTop: '0' }"
          >忘记密码</router-link
        >
        <el-button
          type="primary"
          @click=""
          :style="{ width: '530px', height: '50px' }"
        >
          登录
        </el-button>
        <div class="flex justify-center mt-24">
          <div class="other1"></div>
          <div class="other">其它方式登录</div>
          <div class="other1"></div>
        </div>
        <div class="flex justify-center mt-24">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
        <router-link to="/register" class="register-link">
          没有账号，<span class="blue-text">去注册</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.logo-top {
  display: flex;
  align-items: center;
}

.loginPage {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    45deg,
    #c1deff 4.69%,
    #e0eeff 26.56%,
    #e5f8fb 87.13%
  );

  //left
  .logo-image {
    margin-right: 8px;
    width: 113px;
    height: 113px;
  }

  .logo-container {
    font-size: 20px;
    word-spacing: 10px;
  }

  .logo2 {
    color: #368cd9;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .logo1 {
    color: var(--logo, #031f47);
    font-family: Poppins;
    font-size: 40px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.8px;
  }

  .logo {
    width: 364px;
    height: 169px;

    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 17px;
  }

  //right
  .register-link {
    text-decoration: none;
  }

  .blue-text {
    color: blue;
  }

  .custom-label {
    color: var(--2, #031f47);
    font-family: Abyssinica SIL;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    /* 91.667% */
  }

  .custom-input {
    width: 530px;
    height: 50px;
  }

  .circle {
    box-sizing: border-box;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #ffffff;
    border: 2px solid #7b7b7b;
    margin: 0 12px;
  }

  .flex {
    align-items: center;
    margin-top: 0px;
    justify-content: center;
  }

  .forgot {
    margin-top: 4px;
    width: 531px;
    color: var(--unnamed, #a5afbd);
    text-align: right;
    font-family: Abyssinica SIL;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    /* 137.5% */
    text-decoration: none;
    display: inline-block;
  }

  .other1 {
    margin-left: 14px;
    margin-right: 14px;
    width: 200px;
    height: 3px;
    background: var(--unnamed, #e1e4ea);
  }

  .other {
    color: var(--unnamed, #7c838d);
    font-family: Abyssinica SIL;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    /* 137.5% */
  }

  .formWrapper {
    margin-bottom: 24px;
  }

  .loginBox {
    width: 1421px;
    height: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .left {
      flex: 1;
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
      // border: 1px solid #31383f;
      border-right: none;
      background: #f3fafd;
      box-shadow: 0px 0px 9px 3px #c5dcfa;
    }

    .right {
      flex: 1;
      height: 100%;
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      background-color: #ffffff;
    }

    .loginTitlte {
      margin-top: 40px;
      margin-bottom: 0px;
      line-height: 86px;
      width: 122px;
      height: 57px;
      text-align: center;
      font-family: Abhaya Libre SemiBold;
      font-size: 48px;
      font-style: normal;
    }
  }
}
</style>
