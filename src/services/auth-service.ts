import http from "@/plugins/axios";

class AuthService {
    async login(data){
        const ret = await http.post("/user/login",data);
        return ret;
    }
}
export default new AuthService();