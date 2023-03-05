import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "animate.css";
import "./assets/scss/main.scss";

const app = createApp(App);

const imports = [store, router];

imports.forEach(item => {
  app.use(item);
});
app.mount("#app");
