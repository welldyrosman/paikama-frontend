import type Detail from "./DetailTrans";
import type Package from "./Package";
import type SelectedOptions from "./SelectedOption";
import type SubPackage from "./SubPackage";

export default interface TransactionVa {
    details: Detail;
    trip: Package;
    package: SubPackage;
    options: Array<SelectedOptions>;
    id: number;
    member_id: number;
    trip_id: number;
    trip_package_id: number;
    book_date: string;
    payment_time: string;
    rating: number;
    payment_status: string;
    feature_total: number;
    tax: number;
    total: number;
    created_at: string;
    updated_at: string;
    payment_exp_time: string;
    payment_method: string;
    channel_code: string;
    uuid: string;
    options_total: number;
    grand_total: number;
    virtual_account: string;
  }