import type defaultConfig from "./configType";
const config: defaultConfig = {
  headers: {
    display: true,
    width: "fixed",
    // 布局方式
    asideTop: false,
  },
  footer: {
    display: true,
    width: "fixed",
  },
  aside: {
    display: true,
    collapse: true,
    popperEffect: "light",
    backgroundColor: "#000",
    textColor: "#fff",
  },
};

export default config;
