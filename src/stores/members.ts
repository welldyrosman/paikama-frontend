import { ref, computed } from "vue";
import { acceptHMRUpdate, defineStore } from "pinia";

export interface DataState {
  userList: UserInfo[];
  user: UserInfo;
  isLogin: boolean;
  n:any;
}

export const useMemberStore = defineStore({
  id: "member",
  state: (): DataState => {
    return {
      isLogin: false,
      userList: [],
      user: {} as UserInfo,
      n: ref(0),
    };
  },
  getters: {},
  persist: true,
});
interface UserInfo {
  name: string;
  age: number;
}

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMemberStore, import.meta.hot));
}
