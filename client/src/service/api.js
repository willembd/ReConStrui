import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3003/',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if(token){
        config.headers['Authorization'] = `${token}`
        config.headers['Access-Control-Allow-Origin'] = '*'
    }
    return config
})

api.interceptors.request.use((response) => {
    return response
})