import type Option from "./Option";

export default interface Options {
    id: number,
    title:string,
    items:Array<Option>,
    is_forperson:boolean
  }
  