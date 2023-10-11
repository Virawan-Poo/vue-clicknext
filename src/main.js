import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";

import "./assets/main.scss";

createApp(App).use(bootstrap).mount("#app");
