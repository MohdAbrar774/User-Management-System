import axios from "axios";

const envBase = import.meta.env.VITE_API_BASE_URL as string | undefined;
const defaultBase = import.meta.env.MODE === 'development' ? '' : 'http://localhost:3000';

const api = axios.create({
    baseURL: envBase ?? defaultBase,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api;
