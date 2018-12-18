import { queryPlugins } from "@/interfaces/plugins.js"

let config = {
    state:{
        plugins: []
    },
    getters:{
        pluginsIdMap(state){
            let plugins = state.plugins
            let map = new Map()
            plugins.forEach(plugin => map.set(plugin.id, plugin))
            return map
        }
    },
    actions:{
        initmodule({dispatch}){
            return dispatch("updatePlugins")
        },
        updatePlugins({state}){
            return queryPlugins().then(res => {
                state.plugins = res.data.plugins
            })
        }
    }
}

export default config