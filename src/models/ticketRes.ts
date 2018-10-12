export interface TicketResponse {
    response_code:number,
    response_message:string,
    tickets:Ticket[]
}
export interface Ticket {
    source_app:string,
    travel_from:string,
    travel_to:string,
    travel_date:string,
    travel_time:string,
    pickup_point:string,
    seat:string,
    msisdn:string,
    name:string,
    reference_number:string,
    amount:string,
    commision:string,
    payment_channel:string,
    description:string,
    payment_date:string,
    payment_id:string,
    transport_company:string,
    reg_number:string,
    referral_code:string,
    transport_mode:string,
    status:string,
    update_date:string,
    qr_code:string,
    vehicle_name:string,
    served_by:string,
    bus_company_ref_number:string

}