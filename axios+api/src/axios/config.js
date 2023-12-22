import axios from "axios";

const blogFetch = axios.get({
    baseURL: "https://jsonplaceholder.typicode.com",
});

export default blogFetch;