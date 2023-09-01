<script setup lang="ts">
import reader from "@/assets/images/readers.png";
import avatar from "@/assets/images/avatar.png";
import image from "@/assets/images/image.png";

const tableData = [
  {
    ranking: "1",
    title: "“双12”遇冷……",
    readers: "299",
    add: "78.37%",
  },
  {
    ranking: "2",
    title: "“双12”遇冷……",
    readers: "299",
    add: "78.37%",
  },
  {
    ranking: "2",
    title: "“双12”遇冷……",
    readers: "299",
    add: "78.37%",
  },
  {
    ranking: "2",
    title: "“双12”遇冷……",
    readers: "299",
    add: "78.37%",
  },
  {
    ranking: "2",
    title: "“双12”遇冷……",
    readers: "299",
    add: "78.37%",
  },
  {
    ranking: "2",
    title: "“双12”遇冷……",
    readers: "299",
    add: "78.37%",
  },
  {
    ranking: "2",
    title: "“双12”遇冷……",
    readers: "299",
    add: "78.37%",
  },
  {
    ranking: "2",
    title: "“双12”遇冷……",
    readers: "299",
    add: "78.37%",
  },
  {
    ranking: "2",
    title: "“双12”遇冷……",
    readers: "299",
    add: "78.37%",
  },
  {
    ranking: "2",
    title: "“双12”遇冷……",
    readers: "299",
    add: "78.37%",
  },
  {
    ranking: "2",
    title: "“双12”遇冷……",
    readers: "299",
    add: "78.37%",
  },
  {
    ranking: "2",
    title: "“双12”遇冷……",
    readers: "299",
    add: "78.37%",
  },
  {
    ranking: "2",
    title: "“双12”遇冷……",
    readers: "299",
    add: "78.37%",
  },
  {
    ranking: "2",
    title: "“双12”遇冷……",
    readers: "299",
    add: "78.37%",
  },
  {
    ranking: "2",
    title: "“双12”遇冷……",
    readers: "299",
    add: "78.37%",
  },
];
</script>

<template>
  <div id="dashboardCom" flex flex-row>
    <!-- begin::main -->
    <div class="main w78% mr2% h100%">
      <!-- 137px -->
      <!-- 869 -->
      <div class="dataOverview h16% bg-#fff flex flex-row p2%">
        <div class="item">
          <div class="icon">
            <img :src="reader" alt="" />
          </div>
          <div class="desc">
            <div class="title">阅读量</div>
            <div class="num">xxx</div>
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <img :src="reader" alt="" />
          </div>
          <div class="desc">
            <div class="title">阅读量</div>
            <div class="num">xxx</div>
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <img :src="reader" alt="" />
          </div>
          <div class="desc">
            <div class="title">阅读量</div>
            <div class="num">xxx</div>
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <img :src="reader" alt="" />
          </div>
          <div class="desc">
            <div class="title">阅读量</div>
            <div class="num">xxx</div>
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <img :src="reader" alt="" />
          </div>
          <div class="desc">
            <div class="title">阅读量</div>
            <div class="num">xxx</div>
          </div>
        </div>
      </div>

      <!-- begin::chartRanking -->
      <div class="chartRanking h78% w100% flex flex-row mt-6%">
        <!-- begin::articleActive -->
        <div class="articleActive h100% w41% mr7% py3% px4% bg-#fff">
          <div flex flex-row justify-between>
            <h1 text-16px>文章活跃度</h1>
            <router-link to="">查看更多</router-link>
          </div>
          <div class="articleTable w100% h79% mt3%">
            <el-table :data="tableData" height="500" style="width: 100%">
              <el-table-column prop="ranking" label="排名" />
              <el-table-column prop="title" label="标题" />
              <el-table-column prop="readers" label="浏览量" />
              <el-table-column prop="add" label="日增" />
            </el-table>
          </div>
        </div>
        <!-- end::articleActive -->

        <div class="visitChart flex flex-col w51%">
          <div class="userActive h44% mb6%">月用户访问量</div>
          <div class="mapActive h50%">访客来源</div>
        </div>
      </div>
      <!-- end::chartRanking -->
    </div>
    <!-- end::main -->

    <!-- begin::aside -->
    <div class="aside w20%">
      <!-- begin::activeUser -->
      <div class="activeUser bg-#fff py5% px2%">
        <h1 class="text-16px px24px">活跃用户排行</h1>

        <!-- begin::userList -->
        <div class="userList flex flex-col p3%">
          <div class="item">
            <div class="avatar">
              <img :src="avatar" alt="avatar" />
            </div>
            <div class="userData">
              <div class="userName">用户名</div>
              <div class="data">
                <span>回复 xxx </span>
                <span>评论 xxx </span>
                <span>点赞 xxx </span>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="avatar">
              <img :src="avatar" alt="avatar" />
            </div>
            <div class="userData">
              <div class="userName">用户名</div>
              <div class="data">
                <span>回复 xxx </span>
                <span>评论 xxx </span>
                <span>点赞 xxx </span>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="avatar">
              <img :src="avatar" alt="avatar" />
            </div>
            <div class="userData">
              <div class="userName">用户名</div>
              <div class="data">
                <span>回复 xxx </span>
                <span>评论 xxx </span>
                <span>点赞 xxx </span>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="avatar">
              <img :src="avatar" alt="avatar" />
            </div>
            <div class="userData">
              <div class="userName">用户名</div>
              <div class="data">
                <span>回复 xxx </span>
                <span>评论 xxx </span>
                <span>点赞 xxx </span>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="avatar">
              <img :src="avatar" alt="avatar" />
            </div>
            <div class="userData">
              <div class="userName">用户名</div>
              <div class="data">
                <span>回复 xxx </span>
                <span>评论 xxx </span>
                <span>点赞 xxx </span>
              </div>
            </div>
          </div>
        </div>
        <!-- end:userList -->

        <button
          class="text-#fff py5px px16px bg-#007fdf rounded-4px relative left-50%"
        >
          查看全部排名
        </button>
      </div>
      <!-- end::activeUser -->

      <!-- begin::notice -->
      <div class="notice mt5% flex flex-col bg-#fff">
        <div class="w100% h40%">
          <img :src="image" alt="" class="w100% h100%" />
        </div>
        <div class="py7% px6%">
          <div flex justify-between>
            <span font-semibold text-16px>公告</span>
            <router-link to="" class="text-#165DFF text-14px"
              >查看更多</router-link
            >
          </div>
          <div class="w92% px4% mt5%">
            <div class="item">
              <span class="tag">活动</span>
              <span>内容最新优惠活动</span>
            </div>
            <div class="item">
              <span class="tag">消息</span>
              <span>新增内容尚未通过审核</span>
            </div>
            <div class="item">
              <span class="tag">消息</span>
              <span>新增内容尚未通过审核</span>
            </div>
            <div class="item">
              <span class="tag">消息</span>
              <span>新增内容尚未通过审核</span>
            </div>
            <div class="item">
              <span class="tag">消息</span>
              <span>新增内容尚未通过审核</span>
            </div>
          </div>
        </div>
      </div>
      <!-- end::notice -->
    </div>
    <!-- end::aside -->
  </div>
</template>

<style lang="scss" scoped>
.notice {
  .item {
    margin-bottom: 7px;

    .tag {
      font-size: 12px;
      margin-right: 4px;
      padding: 0 8px;
      color: #f77234;
      background-color: #fff3e8;
      font-weight: 600;
    }
    span {
      font-size: 14px;
    }
  }
}
</style>
