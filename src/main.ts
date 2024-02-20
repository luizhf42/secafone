import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import { inject } from "@vercel/analytics";

createApp(App).mount("#app");
inject();
