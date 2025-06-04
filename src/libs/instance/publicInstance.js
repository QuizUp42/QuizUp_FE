import axios from "axios";

const publicInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: false,
});

export default publicInstance;
