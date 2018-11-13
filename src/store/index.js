import { login } from "../interfaces/login.js"

let config = {
    state:{
        token: ""
    },
    getters:{
        iflogin(state){
            return !!state.token
        }
    },
    actions:{
        async login({state}, {password}){
            //TODO: 登陆操作
            
            state.token = "a token"

            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve()
                }, 1500)
            })
        }
    }
}

export default config