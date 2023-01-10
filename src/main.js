import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/tailwind.css";
import axios from "axios";
import VueAxios from "vue-axios";

createApp(App).use(VueAxios, axios).use(store).use(router).mount("#app");
