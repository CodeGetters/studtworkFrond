import type defaultConfig from "./configType";
const config: defaultConfig = {
  mainLayout: {
    asideTop: false,
  },
  headers: {
    display: true,
    width: "fixed",
  },
  footer: {
    display: true,
    width: "fixed",
  },
  aside: {
    display: true,
    collapse: true,
    popperEffect: "light",
    backgroundColor: "#fff",
    textColor: "#000",
  },
};

export default config;
