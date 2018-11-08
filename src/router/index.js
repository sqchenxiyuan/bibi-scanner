import login from "../pages/login.vue"

import indexFrame from "../frames/index.vue"
import index from "../pages/index.vue"
import tasks from "../pages/tasks.vue"
import nodes from "../pages/nodes.vue"
import plugins from "../pages/plugins.vue"

let routerConfig = {
    mode: "history",
    routes: [
        {
            path: "/",
            meta:{
                title: "bibi烧猫器",
                beforeEach(to, from, next, { store }){
                    if(store.getters.iflogin){
                        next()
                    } else {
                        next("/login")
                    }
                }
            },
            component: indexFrame,
            children:[
                {
                    path: "/",
                    component: index
                },
                {
                    path: "/tasks",
                    component: tasks
                },
                {
                    path: "/nodes",
                    component: nodes
                },
                {
                    path: "/plugins",
                    component: plugins
                },
            ]
        },
        {
            path: "/login",
            component: login,
            meta:{
                title: "登陆",
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