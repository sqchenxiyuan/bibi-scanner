import { queryPlugins } from "@/interfaces/plugins.js"

let config = {
    state:{
        plugins: []
    },
    actions:{
        initmodule({dispatch}){
            return dispatch("updatePlugins")
        },
        updatePlugins({state}){
            return queryPlugins().then(res => {
                state.plugins = res.data.data.plugins
            })
        }
    }
}

export default config