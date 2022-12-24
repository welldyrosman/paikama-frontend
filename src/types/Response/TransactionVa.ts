import type Package from "../Package";
import type SelectedOptions from "../SelectedOption";
import type SubPackage from "../SubPackage";
import type TransactionVa from "../Transaction";

export default interface OptionsResponse {
  id: number;
  transaction_id: number;
  trip_id: number;
  trip_package_id: number;
  trip_package_option_id: number;
  trip_package_option_item_id: number;
  price: number;
  qty: number;
  is_forperson: number;
  items: {
    id: number;
    title: string;
  };
}

export default interface TransactionVaResponse {
  data: TransactionVa;
}
