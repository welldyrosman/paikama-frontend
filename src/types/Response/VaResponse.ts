import type VirtualAccount from "./VirtualAccount";
export default interface VaResponse {
  data: {
    id: string | null;
    type: string | null;
    country: string | null;
    business_id: string | null;
    customer_id: string | null;
    reference_id: string | null;
    reusability: string | null;
    status: string | null;
    actions: any;
    description: null;
    created: string | null;
    updated: string | null;
    metadata: {
      transaction_id: any;
    };
    billing_information: string | null;
    failure_code: string | null;
    ewallet: string | null;
    direct_bank_transfer: string | null;
    direct_debit: string | null;
    card: string | null;
    over_the_counter: string | null;
    qr_code: string | null;
    virtual_account: VirtualAccount;
  };
}
