import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

createApp(App).use(store).use(router).use(Toast).mount("#app");
