import { i18n } from "@/core/i18n/index";

// TODO:存储在 localStorage
export const changLang = () => {
  console.log("-----", i18n.global.locale.value);
};
