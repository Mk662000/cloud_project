import axios from "axios";

export default axios.create({
    baseURL: "http://192.168.1.12/cloud_project_api/Api/",
    headers: {
        "Content-Type": "application/json",
    },
});