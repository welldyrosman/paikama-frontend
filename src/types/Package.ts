import type Agency from "./Agency";
import type SubPackage from "./SubPackage";
import type PositionPack from "./Position";
export default interface Package{
    id:number,
    title:string,
    description:string,
    price_before: number;
    star:number,
    city:string,
    country:string,
    comments:number,
    price: number;
    packages: Array<SubPackage>,
    guidelist:Array<any>,
    tripkind: Array<any>,
    agency:Agency,
    positions:PositionPack,
    images:any
}