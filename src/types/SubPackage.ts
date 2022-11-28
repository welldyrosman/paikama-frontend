import type Info from "./Info";

export default interface SubPackage {
  id: number,
  title: string,
  price_before: number,
  price: number,
  pricelist: Array<any>,
  includes: Array<Info>,
  excludes: Array<Info>,
  itenarary: Array<any>,
  additionalInfos:Array<Info>,
}
