import axios from "axios";

const api = axios.create({
    // baseURL: "https://api.kaizin.work/api",
    baseURL: "https://nefruza-adm.vercel.app/api/v1",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});


export default api;
