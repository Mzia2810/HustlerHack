import axios, { AxiosError } from "axios"
import { Alert } from "react-native";
import { store } from "../store/configStore";



const ApiInstance = axios.create({
    baseURL: 'https://api.hustlerfundhack.com/public/api/',
    timeout: 5000,
    headers: {
        'Accept': 'Application/json'
    }
});

// Add a request interceptor
ApiInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    let token = store.getState().login?.token
    if (!!token)
        config.headers.Authorization = `Bearer ${token}`
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
    // console.error(error?.response);
    // console.error(error?.response?.statusText);
    // console.error(error?.response?.message);
    console.error(error?.response?.data?.message);
    error?.response?.data?.message && typeof error?.response?.data?.message==='string'&& Alert.alert(`${error?.response?.data?.message||""}`)

    // Alert.alert(error?.message || '')
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default ApiInstance