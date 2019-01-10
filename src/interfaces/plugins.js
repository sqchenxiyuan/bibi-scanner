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
        }
    })
}

export function uploadPlugin(obj){
    let {
        file,
    } = obj

    let formdata = new FormData()
    formdata.set("plugin", file)

    return axios.post("/plugins", formdata)
}