<script setup lang="ts"></script>

<template>
  <div class="loginPage">
    <div class="loginBox">
      <div class="left">左边</div>
      <div class="right">
        <h1>登录</h1>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
      border: 1px solid #31383f;
      border-right: none;
    }
    .right {
      flex: 1;
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
      border: 1px solid #31383f;
    }
  }
}
</style>
