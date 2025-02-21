import Axios, { AxiosInstance } from "axios";
import Cookies from "js-cookie";

export const httpClient: AxiosInstance = Axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' +  Cookies.get('auth_token')
    },
});