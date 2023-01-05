import { ref, computed } from "vue";

import { acceptHMRUpdate, defineStore } from "pinia";
import type Package from "@/types/Package";
import type { CartData } from "./cart";

export interface DataState {
    comp_data: Array<Package>;
    compare_cart:Array<CartData>
}

export const useCompareStore = defineStore({
  id: "compare",
  state: (): DataState => {
    return {
        comp_data: [],
        compare_cart:[]
    };
  },
  getters: {},
  persist: true,
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCompareStore, import.meta.hot));
}
