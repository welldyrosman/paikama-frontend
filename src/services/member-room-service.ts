import http from "@/plugins/axios";
class MemberRoomService {
  async mytransaction() {
    const ret = await http.get("/myprofile/transaction");
    return ret;
  }
  
}
export default new MemberRoomService();
