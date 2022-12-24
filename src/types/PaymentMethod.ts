import type PaymentMerchant from "./PaymentMerchant";

export default interface PaymentMethod{
    id:number,
    title:String,
    methods:Array<PaymentMerchant>,
    type:string
}