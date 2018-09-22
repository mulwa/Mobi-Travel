import { Seats } from './seats';
import { TickeType } from './ticketType';
export interface  responseI {
    response_code:number,
    response_message:string,
    seats?:Seats,
    ticket_type?:TickeType,
}