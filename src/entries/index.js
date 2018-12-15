import "./common.js"
import Vue from "vue"
import VueRouter from "vue-router"
import Vuex from "vuex"
import VueRouterTitle from "vue-router-title"

import App from "../app.vue"

import routerConfig from "../router"
let router = new VueRouter(routerConfig)

import storeConfig from "../store"
let store = new Vuex.Store(storeConfig)

import axios from "../interfaces/axios-instance.js"

axios.interceptors.request.use(function(config){
    config.headers["Authorization"] = `JWT ${store.state.token}`
    return config
}, function(error){return Promise.reject(error)})

VueRouterTitle({
    defaultTitle: "bibi-scanner~~~",
    router,
    store
})

router.beforeEach(async (to, from, next) => { //执行路由自己的钩子
    let matched = to.matched
    let beforeEachs = to.matched.filter(r => r.meta && r.meta.beforeEach).map(r => r.meta.beforeEach)
    
    for (let i = 0; i < beforeEachs.length; i++){
        let beforeEach = beforeEachs[i]
        let result = await new Promise((resolve, reject) => {
            beforeEach(to, from, function(x){
                resolve(x)
            }, {
                router,
                store
            })
        })

        if (result !== null){
            next(result)
            return
        }
    }

    next()
})

store.dispatch("init").then(_ => {
    if(store.state.token){
        router.replace("/")
    } else {
        router.replace("/login")
    }

    new Vue(Object.assign(App, {
        router,
        store
    })).$mount("#app")
})

