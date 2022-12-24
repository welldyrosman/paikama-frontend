import type Rundown from "./Rundown";

export default interface Itinerary{
    id:number,
    title:string,
    seq:number,
    add_info:string,
    rundowns:Array<Rundown>
}