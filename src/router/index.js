import index from "../pages/index.vue"
import login from "../pages/login.vue"
import pageB from "../pages/page-b.vue"

let routerConfig = {
    mode: "history",
    routes: [
        {
            path: "/",
            meta:{
                beforeEach(to, from, next, { store }){
                    if(store.getters.iflogin){
                        next()
                    } else {
                        next("/login")
                    }
                }
            },
            component: index
        },
        {
            path: "/login",
            component: login,
            meta:{
                beforeEach(to, from, next, { store }){
                    if(store.getters.iflogin){
                        next("/")
                    } else {
                        next()
                    }
                }
            },
        }
    ]
}

export default routerConfig