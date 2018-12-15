import axios from "axios"

let instance = axios.create({
    baseURL: "http://10.10.9.233:3000"
})

export default instance