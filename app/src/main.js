import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";

import { createI18n } from "vue-i18n";
import messages from "@intlify/vite-plugin-vue-i18n/messages";

const app = createApp(App);

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "fr",
  globalInjection: true,
  messages,
});

app.use(router);
app.use(i18n);
app.mount("#app");
