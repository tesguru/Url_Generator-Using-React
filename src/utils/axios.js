import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://cleanuri.com/api/v1/shorten',
});

export default axiosInstance;