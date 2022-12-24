import type Info from "./Info";
import type Itinerary from "./Itinerary";
import type Options from "./Options";
import type Price from "./Price";
import type TripFacility from "./TripFacility";

export default interface SubPackage {
  id: number,
  title: string,
  pricelist: Array<any>,
  includes: Array<TripFacility>,
  excludes: Array<TripFacility>,
  itineraries: Array<Itinerary>,
  additionalInfos:Array<Info>,
  prices:Array<Price>,
  options:Array<Options>
}
