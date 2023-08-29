<script setup lang="ts">
import reader from "@/assets/images/readers.png";
</script>

<template>
  <div id="dashboardCom" flex flex-row class="bg-#ccc">
    <!-- 1640 -->
    <div class="main w78% mr2%">
      <!-- 137px -->
      <!-- 819 -->
      <div class="dataOverview h17% bg-#fff flex flex-row p24px">
        <div class="item flex flex-row">
          <div class="icon">
            <img :src="reader" class="w100% h100%" alt="" />
          </div>
          <div class="desc flex flex-col">
            <div class="title">阅读量</div>
            <div class="num">xxx</div>
          </div>
        </div>
        <div class="item flex flex-row">
          <div class="icon">
            <img :src="reader" class="w100% h100%" alt="" />
          </div>
          <div class="desc flex flex-col">
            <div class="title">阅读量</div>
            <div class="num">xxx</div>
          </div>
        </div>
        <div class="item flex flex-row">
          <div class="icon">
            <img :src="reader" class="w100% h100%" alt="" />
          </div>
          <div class="desc flex flex-col">
            <div class="title">阅读量</div>
            <div class="num">xxx</div>
          </div>
        </div>
        <div class="item flex flex-row">
          <div class="icon">
            <img :src="reader" class="w100% h100%" alt="" />
          </div>
          <div class="desc flex flex-col">
            <div class="title">阅读量</div>
            <div class="num">xxx</div>
          </div>
        </div>
        <div class="item flex flex-row">
          <div class="icon">
            <img :src="reader" class="w100% h100%" alt="" />
          </div>
          <div class="desc flex flex-col">
            <div class="title">阅读量</div>
            <div class="num">xxx</div>
          </div>
        </div>
      </div>
      <div class="chartRanking flex flex-row">
        <div class="articleActive">文章活跃度</div>
        <div class="visitChart flex flex-col">
          <div class="userActive">月用户访问量</div>
          <div class="mapActive">访客来源</div>
        </div>
      </div>
    </div>
    <div class="aside w20%">
      <div class="activeUser bg-#fff p18px">
        <h1 class="text-16px">活跃用户排行</h1>
        <div class="userList flex flex-col">
          <div class="item flex flex-row">
            <div class="avatar">
              <img :src="reader" alt="" class="w100% h100%" />
            </div>
            <div class="userData flex-col">
              <div class="userName">用户名</div>
              <div class="data">
                <span>回复</span>
                <span>评论</span>
                <span>点赞</span>
              </div>
            </div>
          </div>
          <div class="item flex flex-row">
            <div class="avatar">
              <img :src="reader" alt="" class="w100% h100%" />
            </div>
            <div class="userData flex-col">
              <div class="userName">用户名</div>
              <div class="data">
                <span>回复</span>
                <span>评论</span>
                <span>点赞</span>
              </div>
            </div>
          </div>
          <div class="item flex flex-row">
            <div class="avatar">
              <img :src="reader" alt="" class="w100% h100%" />
            </div>
            <div class="userData flex-col">
              <div class="userName">用户名</div>
              <div class="data">
                <span>回复</span>
                <span>评论</span>
                <span>点赞</span>
              </div>
            </div>
          </div>
        </div>
        <button>查看全部排名</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dataOverview {
  .icon {
    width: 73px;
    height: 59px;
  }
  .title {
    width: 120px;
    text-align: center;
    font-size: 14px;
  }
  .num {
    text-align: center;
    font-size: 32px;
    font-weight: 600;
  }
}
.activeUser {
  .item {
    margin-top: 10px;
    padding: 0 16px;

    .avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      overflow: hidden;
      background: red;
    }

    .userName {
      margin-bottom: 3px;
      font-size: 12px;
      font-weight: 600;
    }

    .data {
      color: #708099;
      font-size: 10px;
      font-weight: 400;
    }
  }

  button {
    color: #fff;
    padding: 5px 16px;
    border-radius: 4px;
    background-color: #007fdf;
  }
}
</style>
