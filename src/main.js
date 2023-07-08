import { createApp } from "vue";
import router from "./router/index.js";
import App from "./App.vue";
import { createPinia } from "pinia";
import axios from "axios";
window.axios = axios;

import {
  Pagination,
  Input,
  Select,
  Avatar,
  Table,
  Card,
  Menu,
  List,
  Drawer,
  Button,
  message,
} from "ant-design-vue";

//import icon
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas, fab, far);

import "ant-design-vue/dist/antd.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css";

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(createPinia());
app.use(router);
app.use(Pagination);
app.use(Input);
app.use(Select);
app.use(Avatar);
app.use(Table);
app.use(Card);
app.use(Button);
app.use(Drawer);
app.use(List);
app.use(Menu);
app.mount("#app");

app.config.globalProperties.$message = message;
