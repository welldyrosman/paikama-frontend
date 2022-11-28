import type { App } from 'vue'
declare module 'vue' {
  interface ComponentCustomProperties {
    $toCurrency: typeof String,
    $withComa: typeof String,
  }
}

export default function registerGlobalProp(app: App) {
  app.config.globalProperties.$toCurrency = (number) => {
    // retrieve a nested property in `options`
    var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "IDR",
    });
    return formatter.format(number);
  };
  app.config.globalProperties.$withComa = (x:Number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
 
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
