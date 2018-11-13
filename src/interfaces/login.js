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
    return axios.post("logout")
}