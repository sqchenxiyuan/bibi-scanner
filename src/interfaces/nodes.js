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
        },
        baseURL: "https://www.easy-mock.com/mock/5bebcb08aa71eb233ec34709/bibiscan"
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

export function getNodeById(obj){
    let {
        nodeId
    } = obj

    return axios.get(`/nodes/${nodeId}`)
}

export function deletNodeById(obj){
    let {
        nodeId
    } = obj

    return axios.delete(`/nodes/${nodeId}`)
}

export function pingNode(obj){
    let {
        nodeId
    } = obj

    return axios.post(`/nodes/${nodeId}/ping`)
}