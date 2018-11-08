<template>
    <router-view></router-view>
</template>

<script>
import VueRouter from "vue-router"
import Vuex from "vuex"
import VueRouterTitle from "vue-router-title"

import routerConfig from "./router"
let router = new VueRouter(routerConfig)

import storeConfig from "./store"
let store = new Vuex.Store(storeConfig)

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

export default {
    router,
    store,
    methods:{
        add(){
            this.$store.commit("increment")
        }
    }
}
</script>