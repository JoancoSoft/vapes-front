import axiosBase from 'axios';
import useAuthStore from '@/store/authStore';

const axios = axiosBase.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

axios.interceptors.request.use(function (xhr) {
    const { token } = useAuthStore();

    if (token) {
        xhr.headers["Authorization"] = token
    }

    return xhr
})


export default axios;