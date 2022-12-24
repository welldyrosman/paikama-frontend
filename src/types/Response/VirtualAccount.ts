interface ChannelProps{
    customer_name: string;
    virtual_account_number: string;
    expires_at: string;
}
export default interface VirtualAccount {
    amount: number;
    currency: string;
    channel_code: string;
    channel_properties: ChannelProps;
}