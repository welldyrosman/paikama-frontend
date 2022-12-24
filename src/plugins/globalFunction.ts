import type { App } from "vue";
declare module "vue" {
  interface ComponentCustomProperties {
    $toCurrency: (nominal: number) => String;
    $withComa: typeof Function;
    $getPercent: (from: number, after: number) => Number;
    $getMY: typeof Function;
    $cdnPath: typeof String;
    $getImage: (path: string) => string;
    $getFirstImage: (path: string) => string;
    $localImage: (path: string) => string;
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
  app.config.globalProperties.$withComa = (x: Number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  app.config.globalProperties.$getPercent = (from: number, after: number) => {
    return Math.round((after / from) * 100);
  };
  app.config.globalProperties.$getImage = (
    path: string = "/members/member-1.jpg"
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
  app.config.globalProperties.$getMY = (date: string) => {
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
    const d = new Date(date);
    return monthNames[d.getMonth()] + " " + d.getFullYear();
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
