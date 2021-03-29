import {reactive} from "vue";

const UserLogin = () => {
    const user = reactive({id: 1})
    const Login = () => {
        user.id = 2
    }
    const Logout = () => {
        user.id = 1
    }

    const checkLogin = () => {
        if (user.id !== 2) {
            console.log('redirect login')
        }
    }
    return {user, Login, Logout, checkLogin}
}
export default UserLogin
