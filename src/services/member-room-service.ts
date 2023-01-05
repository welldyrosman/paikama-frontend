import http from "@/plugins/axios";
class MemberRoomService {
  async mytransaction(page:string) {
    const ret = await http.get(`/myprofile/transaction${page}`);
    return ret;
  }
  async transaction_detail(uuid:string) {
    const ret = await http.get(`/myprofile/transaction/${uuid}`);
    return ret;
  }
  async generate_start_code(uuid:string) {
   
    const ret = await http.post(`/myprofile/${uuid}/generate_start_code`);
    return ret;
  }
  
}
export default new MemberRoomService();
