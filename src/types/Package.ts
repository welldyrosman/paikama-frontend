import type Agency from "./Agency";
import type SubPackage from "./SubPackage";
import type PositionPack from "./Position";
import type City from "./City";
import type Country from "./Country";
import type Comment from "./Comment";
import type CommentPic from "./CommentPic";
import type Price from "./Price";

export default interface Package{
    id:number,
    uuid:string,
    title:string,
    slug:string,
    description:string,
    price_before: number;
    transaction_avg_rating:number,
    city:City,
    country:Country,
    comments_count:number,
    comment_pictures:Array<CommentPic>
    price: number;
    minprice:Price,
    packages: Array<SubPackage>,
    guidelist:Array<any>,
    tripkind: Array<any>,
    agency:Agency,
    positions:PositionPack,
    images:any
}