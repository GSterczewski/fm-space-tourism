import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AppLayout from "./components/AppLayout.vue";
import PageWrapper from "./components/PageWrapper.vue";
const app = createApp(App);
app
  .use(router)
  .component("AppLayout", AppLayout)
  .component("PageWrapper", PageWrapper)
  .mount("#app");
