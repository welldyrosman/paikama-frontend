import type { CartData, OptionSelected } from "@/stores/cart";
import { useCompareStore } from "@/stores/compare";
import type Package from "@/types/Package";
import type { App } from "vue";
import AWS from "aws-sdk";
declare module "vue" {
  interface ComponentCustomProperties {
    $toCurrency: (nominal: number) => String;
    $withComa: typeof Function;
    $getPercent: (from: number, after: number) => Number;
    $getMY: typeof Function;
    $getDMY: typeof Function;
    $cdnPath: typeof String;
    $getImage: (path: string) => string;
    $getFirstImage: (path: string) => string;
    $localImage: (path: string) => string;
    $isValidMail: (email: string) => Boolean;
    $checkCompare: (package: Package) => Boolean;
  }
}

export default function registerGlobalProp(app: App) {
  app.config.globalProperties.$toCurrency = (number: number) => {
    // retrieve a nested property in `options`
    var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "IDR",
    });
    return formatter.format(number);
  };
  app.config.globalProperties.$checkCompare = (trip: Package) => {
    const store = useCompareStore();
    var isExist = false;

    for (var i = 0; i < store.comp_data.length; i++) {
      if (store.comp_data[i].id == trip.id) {
        isExist = true;
        break;
      }
    }
    if (store.comp_data.length == 3) {
      isExist = true;
    }
    if (!isExist) {
      let cartstore = {} as CartData;
      cartstore.trip = trip;
      cartstore.trip_active = trip.id;
      cartstore.package_active = trip.packages[0].id;
      cartstore.prices = { basePrice: 0, befBasePrice: 0 };
      cartstore.contact = {
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        id: null,
      };
      cartstore.adultqty = 1;
      (cartstore.option_selected = {} as OptionSelected),
        store.compare_cart.push(cartstore);
    }
    return isExist;
  };
  app.config.globalProperties.$withComa = (x: Number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  app.config.globalProperties.$getPercent = (from: number, after: number) => {
    return Math.round((after / from) * 100);
  };
  app.config.globalProperties.$isValidMail = (email: string) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };

  app.config.globalProperties.$getImage = (
    path: string = "uploads/DUMMY-02.png"
  ) => {
   
    if (path) {
      let storagepath = import.meta.env.VITE_CDN_URL;
      return new URL(storagepath + path, import.meta.url).href;
    }
  };
  app.config.globalProperties.$getFirstImage = (images: Array<any> = []) => {
    if (images.length < 1) {
      var path = "/members/member-1.jpg";
    } else {
      var path = images[0].img_path as string;
      if (path) {
        let storagepath = import.meta.env.VITE_CDN_URL;
        return new URL(storagepath + path, import.meta.url).href;
      }
    }
  };
  app.config.globalProperties.$localImage = (
    path: string = "/members/member-1.jpg"
  ) => {
    if (path) {
      return new URL(`/src/assets/image/${path}`, import.meta.url).href;
    }
  };
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  app.config.globalProperties.$getMY = (date: string) => {
    const d = new Date(date);
    return monthNames[d.getMonth()] + " " + d.getFullYear();
  };
  app.config.globalProperties.$getDMY = (date: string) => {
    const d = new Date(date);
    return d.getDate() + " " + monthNames[d.getMonth()] + " " + d.getFullYear();
  };
  app.config.globalProperties.$cdnPath = import.meta.env.VITE_CDN_URL;
}

// export default {
//   install: (app, options) => {
//     app.config.globalProperties.$toCurrency = (number) => {
//       // retrieve a nested property in `options`
//       var formatter = new Intl.NumberFormat("en-US", {
//         style: "currency",
//         currency: "IDR",
//       });
//       return formatter.format(number);
//     };

//   },
// };
