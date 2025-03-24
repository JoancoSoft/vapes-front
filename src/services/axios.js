import axiosBase from 'axios';

const axios = axiosBase.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default axios;