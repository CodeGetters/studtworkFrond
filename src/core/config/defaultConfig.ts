import type defaultConfig from "./configType";
const config: defaultConfig = {
  theme: "auto",
  mainLayout: {
    asideTop: false,
  },
  headers: {
    display: true,
    width: "fixed",
    backgroundColor: "#fff",
  },
  footer: {
    display: true,
    width: "fixed",
    backgroundColor: "#fff",
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
