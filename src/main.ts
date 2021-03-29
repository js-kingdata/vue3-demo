import {createApp, reactive} from 'vue'
import App from './App.vue'
import router from "./router";
import UserLogin from "./compoables/user_actions";


createApp(App).provide('user', UserLogin()).use(router).mount('#app')
