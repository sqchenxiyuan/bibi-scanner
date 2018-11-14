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
        },
        baseURL: "https://www.easy-mock.com/mock/5bebcb08aa71eb233ec34709/bibiscan"
    })
}

export function createTask(obj){
    let {
        name,
        target,
        plugins,
        nodes
    } = obj

    return axios.post("/tasks", {
        name,
        target,
        plugins,
        nodes
    })
}

export function getTaskDetail(obj){
    let {
        taskId
    } = obj

    return axios.get(`/tasks/${taskId}`)
}

export function deletTaskById(obj){
    let {
        taskId
    } = obj

    return axios.delete(`/tasks/${taskId}`)
}

export function downloadTaskReport(obj){
    let {
        taskId
    } = obj

    return axios.get(`/tasks/${taskId}/report/download`)
}