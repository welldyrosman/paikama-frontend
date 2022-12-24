
import { acceptHMRUpdate, defineStore } from "pinia";
import type Package from "@/types/Package";
import type SubPackage from "@/types/SubPackage";
import type Info from "@/types/Info";
import type Contact from "@/types/Contact";
import type MeetingPoint from "@/types/MeetingPoint";
import type PaymentMethod from "@/types/PaymentMethod";
import { computed } from "vue";
import type PaymentMerchant from "@/types/PaymentMerchant";
interface Prices {
  basePrice:number;
  befBasePrice:number;
}
interface MeetPoint {
  meeting_point:MeetingPoint;
  contact:number;
}
export interface CartData {
  option_selected:OptionSelected;
  prices:Prices;
  date:Date|undefined;
  adultqty:number;
  cartGuide:Info;
  package_active:number;
  trip_active:number;
  trip:Package|null;
  contact:Contact;
  meetpoint:MeetPoint;
  payment_method:PaymentMerchant,
}
interface IValue {
  prop: number
}

export interface OptionSelected {
  [name: string]: IValue;
}
export const useCartStore = defineStore({
  id: "cart",
  state: (): CartData => {
    return {
        trip_active:0,
        trip:null,
        package_active:0,
        option_selected:{} as OptionSelected,
        prices:{
          basePrice: 0 ,
          befBasePrice: 0,
        } as Prices,
        date:undefined,
        adultqty:1,
        cartGuide:{} as Info,
        contact:{
          firstname:""
        } as Contact,
        meetpoint:{} as MeetPoint,
        payment_method:{} as PaymentMerchant,
       
    };
  },
  getters: {
    option_payload(state):Array<object>{
      const opts=state.option_selected
      var arr=[] as Array<object>;
      for(var p in opts){
        if(!p.includes('_qty')){
          arr.push({
            opt_id:p,
            val_id:opts[p],
            qty:opts[p+'_qty']
          })
        }
      }
      return arr;
    }
  },
  persist: true,
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}
