import axios from "axios";
import { useMemberStore } from "@/stores/members";

axios.interceptors.request.use((config) => {
  const userStore = useMemberStore()
  var basicAuth =  'Bearer '+userStore.token
  config!.headers!.Authorization = basicAuth
  return config;
});
axios.defaults.baseURL=import.meta.env.VITE_API_URL
export default axios;