import { login } from "../interfaces/login.js"

import sysinfoModule from "./sysinfo.js"
import nodesInfoModule from "./nodes.js"

let config = {
    state:{
        token: "test"
    },
    getters:{
        iflogin(state){
            return !!state.token
        }
    },
    actions:{
        init({dispatch}){
            return dispatch("initmodule")
        },
        async login({state}, {password}){
            //TODO: 登陆操作
            
            state.token = "a token"

            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve()
                }, 1500)
            })
        }
    },
    modules:{
        sysinfo: sysinfoModule,
        nodesinfo: nodesInfoModule
    }
}

export default config