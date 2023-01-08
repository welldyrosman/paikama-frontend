import http from "@/plugins/axios";

class LandingPageService {
    async getAll(){
      const ret = await http.get("/wisata");
      return ret.data;
    }
    async destinationbyprov(){
      const ret = await http.get("/destination-by-province");
      return ret.data;
    }
    async findByTitle(title:string|string[]) {
      const ret = await http.get(`/wisata/${title}`);
      return ret.data;
    }
    async getCommentsTrip(title:string|string[]) {
      const ret = await http.get(`/wisata/comments/${title}`);
      return ret.data;
    }
    getImage(path:string) {
      return http.get(`${path}`);
    }
  
    async getmeetingpoints(uuid:string|undefined) {
      const ret = await http.get(`/wisata/meetpoints/${uuid}`);
      return ret.data;
    }
  
    update(id, data) {
      return http.put(`/tutorials/${id}`, data);
    }
  
    delete(id) {
      return http.delete(`/tutorials/${id}`);
    }
  
    deleteAll() {
      return http.delete(`/tutorials`);
    }
  
    
  }
  
  export default new LandingPageService();