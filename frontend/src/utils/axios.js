import axios from "axios";
import { getToken } from "./tokenServices";

export default function setAuthToken() {
    let token = getToken()
    axios.defaults.headers.common['Authorization'] = (token !== null)? `Bearer ${token}`: ''
}