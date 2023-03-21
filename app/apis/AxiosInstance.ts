import axios, { AxiosError } from "axios"
import { Alert } from "react-native";



const ApiInstance = axios.create({
    baseURL:'http://127.0.0.1:8000/api/',
    timeout: 5000,
    headers: {
        'Accept': 'Application/json'
    }
});

// Add a request interceptor
ApiInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
ApiInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error: AxiosError) {
    console.error(error);
    
    Alert.alert(error?.message || '')
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default ApiInstance