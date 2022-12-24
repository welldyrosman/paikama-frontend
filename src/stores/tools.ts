import { ref, computed } from "vue";

import { acceptHMRUpdate, defineStore } from "pinia";

export interface DataState {
  loading:boolean;
}

export const useToolsStore = defineStore({
  id: "member",
  state: (): DataState => {
    return {
        loading: false,
    };
  },
  getters: {},
  persist: true,
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useToolsStore, import.meta.hot));
}
