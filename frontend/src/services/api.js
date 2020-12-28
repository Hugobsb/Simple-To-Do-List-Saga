import axios from 'axios';

import { getToken } from './auth';

const baseURL = 'http://localhost:3333';

const api = axios.create({ baseURL });

api.interceptors.request.use(async config => {
    const token = getToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config
});

export const getBaseURL = () => {
    return baseURL;
}

export default api;