import axiosInstance from "./api";
import { useMemberStore } from "@/stores/members";
const storeMember = useMemberStore();
const setup = (store) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = storeMember.token;
      if (token&&config) {
        config?.headers?config.headers["Authorization"] = 'Bearer ' + token:'';  // for Spring Boot back-end
        //config.headers["x-access-token"] = token; // for Node.js Express back-end
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

 
};

export default setup;