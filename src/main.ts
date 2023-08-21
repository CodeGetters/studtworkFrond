import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import { i18n } from "@/i18n/index";

import "virtual:uno.css";
import "normalize.css";
import "@/assets/styles/normal.css";

const app = createApp(App);
app.use(i18n);
app.use(router);

app.mount("#app");
