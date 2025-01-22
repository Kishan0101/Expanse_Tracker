import axios from "axios";


export const axiosClient = axios.create({
    baseURL : 'https://expanse-tracker-rlds.onrender.com'
})
