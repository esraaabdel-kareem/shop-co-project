import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";


import "@fortawesome/fontawesome-free/css/all.min.css";

const pinia = createPinia();


createApp(App).use(pinia).use(VueSweetalert2).use(router).mount("#app");
