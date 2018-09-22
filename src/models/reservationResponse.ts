import { TicketMessage } from "./ticketMessage";

export interface ReservationRes{
    response_code:number,
    response_message:string,
    ticket_message:TicketMessage
}