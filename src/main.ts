import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import withUUID from "vue-uuid";

import "./assets/scss/index.scss";
import "./assets/scss/mixins.scss";
import "./assets/scss/theme.scss";

const app = withUUID(createApp(App));

app.use(store);
app.mount("#app");
