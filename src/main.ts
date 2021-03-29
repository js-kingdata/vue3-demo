import {createApp, reactive} from 'vue'
import App from './App.vue'
import router from "./router";

const userLogin = () => {
    const user = reactive({id: 1})
    const Login = () => {
        user.id = 2
    }
    const Logout = () => {
        user.id = 1
    }
    return {user, Login, Logout}
}

createApp(App).provide('user', userLogin()).use(router).mount('#app')
