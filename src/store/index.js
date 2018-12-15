import { login, authcheck } from "../interfaces/login.js"

import sysinfoModule from "./sysinfo.js"
import nodesInfoModule from "./nodes.js"
import pluginsInfoModule from "./plugins.js"

let config = {
    state:{
        token: ""
    },
    mutations:{
        save2Local(state){
            localStorage.setItem("TOKEN", state.token)
        },
        load4Local(state){
            state.token = localStorage.getItem("TOKEN") || ""
        },
        clearToken(){
            state.token = ""
        }
    },
    getters:{
        iflogin(state){
            return !!state.token
        }
    },
    actions:{
        // init({dispatch}){
        //     return dispatch("initmodule")
        // },
        async init({state, commit}){
            commit("load4Local")
            if(state.token){
                if(!await authcheck().then(_ => true).catch(_ => false)){
                    commit("clearToken")
                    commit("save2Local")
                }
            }
        },
        async login({state, commit}, {password}){
            return login({
                password
            }).then(res => {
                state.token = res.data.access_token
                commit("save2Local")
            })
        }
    },
    modules:{
        sysinfo: sysinfoModule,
        nodesinfo: nodesInfoModule,
        pluginsinfo: pluginsInfoModule
    }
}

export default config