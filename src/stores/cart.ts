
import { acceptHMRUpdate, defineStore } from "pinia";
import type Package from "@/types/Package";
import type SubPackage from "@/types/SubPackage";
import type Info from "@/types/Info";

export interface CartData {
  cartpackage:Package;
  cartsub:SubPackage;
  date:Date;
  cartTripKind:Info;
  cartGuide:Info;
}

export const useCartStore = defineStore({
  id: "cart",
  state: (): CartData => {
    return {
        cartpackage:{} as Package,
        cartsub:{} as SubPackage,
        date:new Date(),
        cartTripKind:{} as Info,
        cartGuide:{} as Info
    };
  },
  persist: true,
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}
