import type { OptionSelected } from "@/stores/cart";
import type Detail from "../DetailTrans";
import type OptionItem from "../OptionItem";
import type Package from "../Package";
import type SubPackage from "../SubPackage";
import type TransactionOptionDet from "../TransactionOptionDet";

export default interface TransactionHist {
  trip: Package;
  uuid:string;
  package: SubPackage;
  optionitems: Array<OptionItem>;
  optiondets:Array<TransactionOptionDet>;
  id: number;
  book_date: string;
  payment_status:string;
  member_id:number;
  grand_total:number;
  tax:number;
  start_code:string;
  details:Detail;
}
