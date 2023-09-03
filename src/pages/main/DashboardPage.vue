<script setup lang="ts">
import { onMounted } from "vue";
import { echarts } from "@/core/utils/chart";
import image from "@/assets/images/image.png";
import avatar from "@/assets/images/avatar.png";
import reader from "@/assets/images/readers.png";
import china from "@/assets/json/chinaOfMap.json";
import type { ECOption } from "@/core/utils/chart";
import type { GeoJSONSourceInput } from "echarts/types/src/coord/geo/geoTypes";

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

const initLineBar = () => {
  let myChart = echarts.init(document.getElementById("pageView")!);

  let option: ECOption = {
    title: {
      text: "月用户访问量",
      textStyle: {
        fontSize: 20,
        color: "#031F47",
        fontFamily: "LXGWWenKai-Light",
      },
    },
    tooltip: {
      trigger: "item",
    },
    xAxis: {
      type: "category",
      data: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月",
      ],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 121, 121, 231, 200, 150, 80, 70, 110, 130, 123, 232],
        type: "bar",
      },
    ],
  };
  myChart.setOption(option);
};

const initMap = () => {
  // https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json
  let myChart = echarts.init(document.getElementById("chinaMap")!);

  echarts.registerMap("china", china as GeoJSONSourceInput); // 注册地图

  let option: ECOption = {
    title: {
      text: "访客来源-城市",
      textStyle: {
        fontSize: 20,
        color: "#031F47",
        fontFamily: "LXGWWenKai-Light",
      },
    },
    series: [
      {
        type: "map",
        map: "china", // 引入地图数据
        data: [
          {
            name: "北京市",
            value: 21,
          },
          {
            name: "天津市",
            value: 12,
          },
          {
            name: "上海市",
            value: 99,
          },
          {
            name: "重庆市",
            value: 98,
          },
          {
            name: "河北省",
            value: 99,
          },
          {
            name: "河南省",
            value: 29,
          },
          {
            name: "云南省",
            value: 79,
          },
          {
            name: "辽宁省",
            value: 38,
          },
          {
            name: "黑龙江省",
            value: 4,
          },
          {
            name: "湖南省",
            value: 32,
          },
          {
            name: "安徽省",
            value: 84,
          },
          {
            name: "山东省",
            value: 72,
          },
          {
            name: "新疆维吾尔自治区",
            value: 99,
          },
          {
            name: "江苏省",
            value: 70,
          },
          {
            name: "浙江省",
            value: 85,
          },
          {
            name: "江西省",
            value: 11,
          },
          {
            name: "湖北省",
            value: 62,
          },
          {
            name: "广西壮族自治区",
            value: 13,
          },
          {
            name: "甘肃省",
            value: 74,
          },
          {
            name: "山西省",
            value: 78,
          },
          {
            name: "内蒙古自治区",
            value: 74,
          },
          {
            name: "陕西省",
            value: 40,
          },
          {
            name: "吉林省",
            value: 9,
          },
          {
            name: "福建省",
            value: 90,
          },
          {
            name: "贵州省",
            value: 57,
          },
          {
            name: "广东省",
            value: 6,
          },
          {
            name: "青海省",
            value: 52,
          },
          {
            name: "西藏自治区",
            value: 10,
          },
          {
            name: "四川省",
            value: 98,
          },
          {
            name: "宁夏回族自治区",
            value: 11,
          },
          {
            name: "海南省",
            value: 25,
          },
          {
            name: "台湾省",
            value: 86,
          },
          {
            name: "香港特别行政区",
            value: 8,
          },
          {
            name: "澳门特别行政区",
            value: 50,
          },
        ],
      },
    ],
    tooltip: {
      trigger: "item",
    },
    // 视觉映射
    visualMap: {
      left: "right",
      min: 0,
      max: 100,
      inRange: {
        color: [
          "#313695",
          "#4575b4",
          "#74add1",
          "#abd9e9",
          "#e0f3f8",
          "#ffffbf",
          "#fee090",
          "#fdae61",
          "#f46d43",
          "#d73027",
          "#a50026",
        ],
      },
      text: ["High", "Low"],
      calculable: true,
    },
  };

  myChart.setOption(option);
};

onMounted(() => {
  initLineBar();
  initMap();
});
</script>

<template>
  <div id="dashboardCom" flex lg:flex-row xs:flex-col>
    <!-- begin::main -->
    <div class="main" lg="w78% mr2% h100%" xs="w100%">
      <div class="dataOverview p2%" lg="h12% flex flex-row">
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
      <div class="chartRanking mt-2%" lg="h78% w100% flex flex-row">
        <!-- begin::articleActive -->
        <div class="articleActive" lg="w41% mr7% py3% px4%" xs="w100%">
          <div flex flex-row justify-between xs="p4%" lg="p0">
            <h1 text-16px>文章活跃度</h1>
            <router-link to="">查看更多</router-link>
          </div>
          <div class="articleTable" lg="w100% h79% mt3%">
            <el-table :data="tableData" height="500" style="width: 100%">
              <el-table-column prop="ranking" width="60" label="排名" />
              <el-table-column prop="title" label="标题" />
              <el-table-column prop="readers" label="浏览量" />
              <el-table-column prop="add" label="日增" />
            </el-table>
          </div>
        </div>
        <!-- end::articleActive -->

        <!-- begin::visitChart -->
        <div class="visitChart" lg="flex flex-col w51%" xs="w100%">
          <div class="userActive" lg="h44% mb6% p2% mt0" xs="h240px mt20px">
            <div id="pageView" :style="{ width: '100%', height: '100%' }"></div>
          </div>
          <div
            class="mapActive flex"
            lg="h50% w100% flex-row mt0px"
            xs="mt20px flex-col"
          >
            <div class="left" lg="w45% py4% pl2% mr5%" xs="w100%">
              <div
                id="chinaMap"
                :style="{ width: '100%', height: '100%' }"
              ></div>
            </div>
            <div class="cityRank" lg="w50% py4% pr2%" xs="w96% px2% py4%">
              <div class="item w100%">
                <div>天津：18.8%</div>
                <el-progress :percentage="18.8" :show-text="false" />
              </div>
              <div class="item w100%">
                <div>天津：18.8%</div>
                <el-progress :percentage="18.8" :show-text="false" />
              </div>
              <div class="item w100%">
                <div>天津：18.8%</div>
                <el-progress :percentage="18.8" :show-text="false" />
              </div>
              <div class="item w100%">
                <div>天津：18.8%</div>
                <el-progress :percentage="18.8" :show-text="false" />
              </div>
              <div class="item w100%">
                <div>天津：18.8%</div>
                <el-progress :percentage="18.8" :show-text="false" />
              </div>
              <div class="item w100%">
                <div>天津：18.8%</div>
                <el-progress :percentage="18.8" :show-text="false" />
              </div>
              <div class="item w100%">
                <div>天津：18.8%</div>
                <el-progress :percentage="18.8" :show-text="false" />
              </div>
            </div>
          </div>
        </div>
        <!-- end::visitChart -->
      </div>
      <!-- end::chartRanking -->
    </div>
    <!-- end::main -->

    <!-- begin::aside -->
    <div class="aside" lg="w20%" xs="w100%">
      <!-- begin::activeUser -->
      <div class="activeUser" lg="py5% px2% mt0" xs="mt20px py5% px2%">
        <h1 class="text-16px px24px">活跃用户排行</h1>

        <!-- begin::userList -->
        <div class="userList flex flex-col" lg="p3% mt0" xs="mt10px">
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

        <button class="relative left-50% py5px px16px rounded-4px">
          查看全部排名
        </button>
      </div>
      <!-- end::activeUser -->

      <!-- begin::notice -->
      <div class="notice flex flex-col" lg="mt5%" xs="mt20px">
        <div class="w100% h40%">
          <img :src="image" alt="" class="w100% h100%" />
        </div>
        <div class="py7% px6%">
          <div flex justify-between>
            <span font-semibold text-16px>公告</span>
            <router-link to="" class="text-14px">查看更多</router-link>
          </div>
          <div lg="w92% px4% mt5%">
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
