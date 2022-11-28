
import { acceptHMRUpdate, defineStore } from "pinia";
import type City from "@/types/City";
export interface CityData {
    cities:City;
}

export const useCityStore = defineStore({
  id: "city",
  state: (): CityData => {
    return {
      cities:{} as City
    };
  },
  persist: true,
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCityStore, import.meta.hot));
}
