import axios from "axios";


const api = await axios.create({
    baseURL: "/",
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api;
