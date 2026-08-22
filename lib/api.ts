import "server-only";

import axios from "axios";
import { portalApiUrl } from "@/lib/portal-url";

const api = axios.create({
    baseURL: portalApiUrl("/"),
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
});


export default api;
