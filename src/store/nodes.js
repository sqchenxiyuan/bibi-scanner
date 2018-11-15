import { queryNodes } from "@/interfaces/nodes.js"


let config = {
    state:{
        nodes: []
    },
    actions:{
        initmodule({dispatch}){
            return dispatch("updateNodes")
        },
        updateNodes({state}){
            return queryNodes().then(res => {
                state.nodes = res.data.data.nodes
            })
        }
    }
}

export default config