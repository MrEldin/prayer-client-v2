import axios from "axios";
import {useAuthStore} from "@/store/auth/index.js";

// Create a custom Axios instance
const axiosInstance = axios.create();

// Set the Bearer token for this instance
const token = localStorage.getItem('jwtToken');
if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
} else {
    delete axiosInstance.defaults.headers.common['Authorization'];
}

axiosInstance.defaults.baseURL = import.meta.env.VITE_API_BASE_URL
axiosInstance.defaults.withCredentials = true

axiosInstance.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response) {
        console.error('Error data:', error.response.data);
        console.error('Error status:', error.response.status);
        console.error('Error headers:', error.response.headers);
    } else if (error.request) {
        console.error('Error request:', error.request);
    } else {
        console.error('Error message:', error.message);
    }
    console.error('Error config:', error.config);
    useAuthStore().logout();
    return Promise.reject(error);
});

export default axiosInstance;
