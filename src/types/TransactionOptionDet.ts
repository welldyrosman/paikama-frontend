import type OptionItem from "./OptionItem";


export default interface TransactionOptionDet {
  id: number;
  transaction_id: number;
  trip_id: number;
  trip_package_id: number;
  trip_package_option_id: number;
  trip_package_option_item_id: number;
  price: number;
  qty: number;
  is_forperson: number;
  option: OptionItem;
}
