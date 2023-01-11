import http from "@/plugins/axios";

class AuthService {
    async getimage(){
        const ret = await http.get("/myimage");
        return ret;
    }
}
export default new AuthService();