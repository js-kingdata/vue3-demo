import {createApp, reactive} from 'vue'
import App from './App.vue'
import router from "./router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import UserLogin from "./compoables/user_actions";


createApp(App).provide('user', UserLogin()).use(Antd).use(router).mount('#app')
