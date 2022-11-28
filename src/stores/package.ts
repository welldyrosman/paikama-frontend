
import { acceptHMRUpdate, defineStore } from "pinia";
import type Package from "@/types/Package";
import Packages from '@/stores/packages.json'
export interface PackageData {
  packages:Array<Package>;
  count:number;
  packView:Package;
}

export const usePackStore = defineStore({
  id: "packages",
  state: (): PackageData => {
    return {
      packages:Packages.data as unknown as Array<Package>,
      count:9,
      packView:{} as Package
    };
  },
  persist: true,
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePackStore, import.meta.hot));
}
