import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});


api.interceptors.request.use(
    (config)=>{
        const authToken = localStorage.getItem('accessToken');

        if(authToken){
            config.headers.Authorization = `Bearer ${authToken}`
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error)
    }
)

export default api;