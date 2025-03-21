import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000/api",  // Replace with your backend URL
  timeout: 10000,
});

export default instance;