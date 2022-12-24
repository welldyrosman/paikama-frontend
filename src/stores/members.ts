import { ref, computed } from "vue";

import { acceptHMRUpdate, defineStore } from "pinia";

export interface DataState {
  userList: UserInfo[];
  user: UserInfo;
  isLogin: boolean;
  token:string|null;
}

export const useMemberStore = defineStore({
  id: "member",
  state: (): DataState => {
    return {
      isLogin: false,
      userList: [],
      user: {} as UserInfo,
      token:null,
    };
  },
  getters: {},
  persist: true,
});
interface UserInfo {
  name: string;
  email: string;
}

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMemberStore, import.meta.hot));
}
