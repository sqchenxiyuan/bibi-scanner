import axios from "./axios-instance.js"

export function queryNodes(obj = {}){
    let {
        offset,
        limit,
        sort,
        filter
    } = obj

    return axios.get("/nodes", {
        params:{
            offset,
            limit,
            sort,
            filter
        }
    })
}

export function createNode(obj){
    let {
        name,
    } = obj

    return axios.post("/nodes", {
        name
    })
}

export function pingNode(obj){
    let {
        nodeId
    } = obj

    return axios.post(`/nodes/${nodeId}/ping`)
}