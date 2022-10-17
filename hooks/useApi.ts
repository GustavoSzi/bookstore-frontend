import axios from "axios";

const API_CLIENT = axios.create({
    baseURL: "http://localhost:8080"
});

export default API_CLIENT;