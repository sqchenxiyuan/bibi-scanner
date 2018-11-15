import axios from "./axios-instance.js"

export function queryPlugins(obj = {}){
    let {
        offset,
        limit,
        sort,
        filter
    } = obj

    return axios.get("/plugins", {
        params:{
            offset,
            limit,
            sort,
            filter
        },
        baseURL: "https://www.easy-mock.com/mock/5bebcb08aa71eb233ec34709/bibiscan"
    })
}

export function uploadPlugin(obj){
    let {
        file,
    } = obj

    let formdata = new FormData()
    formdata.set("file", file)

    return axios.post("/plugins", formdata)
}

export function deletPluginById(obj){
    let {
        pluginId
    } = obj

    return axios.delete(`/plugins/${pluginId}`)
}