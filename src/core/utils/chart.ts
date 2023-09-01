// 引入 echarts 核心模块
import * as echarts from "echarts/core";
import type { ComposeOption } from "echarts/core";
// 引入 Canvas 渲染器
import { CanvasRenderer } from "echarts/renderers";
//引入柱状图和折线图组件
import { BarChart, LineChart } from "echarts/charts";
//引入标签布局和通用过渡动画特性
import { LabelLayout, UniversalTransition } from "echarts/features";

// 引入标题、提示框、网格、数据集和数据转换器组件
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  // 数据集组件
  DatasetComponent,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent,
} from "echarts/components";

import type {
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
  LineSeriesOption,
} from "echarts/charts";

import type {
  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  DatasetComponentOption,
} from "echarts/components";

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOption = ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>;

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
]);

export { echarts };
