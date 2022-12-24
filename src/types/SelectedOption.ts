import type Option from "./Option";

export default interface SelectedOptions {
  id: number;
  title: string;
  qty: number;
  prices: {
    id: number;
    qty: number;
    price:number;
    transaction_id: number;
    trip_package_option_id: number;
  };
  items: Option;
  is_forperson: boolean;
}
