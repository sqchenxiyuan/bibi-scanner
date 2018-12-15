import axios from "./axios-instance.js"

export function login(obj){
    let {
        password
    } = obj

    return axios.post("/auth", {
        username: "admin",
        password
    })
}

export function authcheck(obj){
    return axios.get("/authcheck")
}

export function getSystemInfo(){
    return axios.get("/sysinfo", {
        baseURL: "https://www.easy-mock.com/mock/5bebcb08aa71eb233ec34709/bibiscan"
    })
}