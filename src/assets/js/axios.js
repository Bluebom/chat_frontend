import axios from "axios";
import store from "@/store";

const HTTP = axios.create({
  baseURL: "http://chat-backend/api",
});

HTTP.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${store.state.user.token}`;
  return config;
});
export default HTTP;
