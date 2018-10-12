import { Ticket } from "./ticketRes";

export interface mpesaResponse {
    response_code:number,
    response_message:string,
    payment_message:any;
    tickets:Ticket[]

}