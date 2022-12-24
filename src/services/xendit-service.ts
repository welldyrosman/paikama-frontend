import http from "@/plugins/axios";
import type TransactionVaResponse from "@/types/Response/TransactionVa";
import type VaResponse from "@/types/Response/VaResponse";
class XenditService {
  async balance() {
    const ret = await http.get("/xendit/balance");
    return ret;
  }
  async createVa(payload){
    const ret = await http.post<any,VaResponse>("/xendit/create_va_transaction",payload);
    return ret;
  }
  async getPaymentByTrans(uuid:string) {
    const ret = await http.get<any,TransactionVaResponse>("/payment/settlement/"+uuid);
    return ret;
  }
  async getva() {
    const ret = await http.get("/xendit/valist");
    return ret;
  }
}
export default new XenditService();
