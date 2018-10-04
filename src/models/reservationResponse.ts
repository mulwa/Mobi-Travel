import { TicketMessage } from "./ticketMessage";

export interface ReservationRes{
    response_code:number,
    response_message:string,
    ticket_message:TicketMessage,
    ticket:Ticket
}

interface Ticket {
    response_code:number,
    return_code:string,
    trx_status:string,
    description:string,
    passenger_name:string,
    merchant_transaction_id:string,
    bus:string,
    bus_format:string,
    route:string,
    date:string,
    seat: string,
    phone_number: string,
    fare:string,
    travel_from:string,
    travel_to:string,
    travel_date:string,
    travel_time:string,
    id_number:string,
    issued_on:string,
    ticket_number:string,
    reference_number:string,
    qr_code:string,
    served_by:string,
    address:string,
    header:string,
    footer:string


}