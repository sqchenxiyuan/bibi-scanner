import axios from "./axios-instance.js"

export function queryTasks(obj = {}){
    let {
        offset,
        limit,
        sort,
        filter
    } = obj

    return axios.get("/tasks", {
        params:{
            offset,
            limit,
            sort,
            filter
        }
    })
}

export function createTask(obj){
    let {
        name,
        startIP,
        endIP,
        plugins,
        nodeId
    } = obj

    return axios.post("/tasks", {
        name,
        startIP,
        endIP,
        plugins,
        nodeId
    })
}

export function getTaskDetail(obj){
    let {
        taskId
    } = obj

    return axios.get(`/tasks/${taskId}`)
}

export function downloadTaskReport(obj){
    let {
        taskId
    } = obj

    return axios.get(`/tasks/${taskId}/report/download`)
}