
export interface Reservation {
    username:string
    api_key: string,
    hash:string,
    action:string,
    from_city:number,
    to_city:number,
    travel_date:string,
    selected_vehicle:number,
    seater:number,
    selected_ticket_type:number,
    payment_method:number,
    phone_number:string,
    id_number:string,
    passenger_name:string,
    email_address:string,
    insurance_charge:string,
    served_by:string,
    amount_charged:string,
    reference_number:string,
    selected_seat:number
}