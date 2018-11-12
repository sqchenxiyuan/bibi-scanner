import login from "../pages/login.vue"

import indexFrame from "../frames/index.vue"
import index from "../pages/index.vue"
import tasks from "../pages/tasks.vue"
import nodes from "../pages/nodes.vue"
import plugins from "../pages/plugins.vue"
import taskDetail from "../pages/task-detail.vue"

let routerConfig = {
    mode: "history",
    routes: [
        {
            path: "/",
            meta:{
                title: "bibi扫猫器",
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
                {
                    path: "/tasks/:taskId",
                    name: "task-detail",
                    component: taskDetail
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