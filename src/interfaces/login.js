import axios from "./axios-instance.js"

export function login(obj){
    let {
        password
    } = obj

    return axios.post("/login", {
        password
    })
}

export function logout(obj){
    return axios.post("/logout")
}

export function getSystemInfo(){
    return axios.get("/sysinfo", {
        baseURL: "https://www.easy-mock.com/mock/5bebcb08aa71eb233ec34709/bibiscan"
    })
}