import axios from "axios";
import { useAuthStore } from "../../stores/useAuthStore";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

instance.interceptors.request.use((config) => {
  const state = useAuthStore.getState();
  const token = state.accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().resetAuth();
      window.location.href = "/mobile/signin";
    }
    return Promise.reject(error);
  }
);

export default instance;
