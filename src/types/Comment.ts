import type CommentPic from "./CommentPic";
import type Member from "./Member";

export default interface Comment {
    id: number,
    comment:string,
    member:Member,
    created_at:string,
    images:Array<CommentPic>
  }
  