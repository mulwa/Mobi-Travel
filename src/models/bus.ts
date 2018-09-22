import { Seats } from "./seats";
import { Price } from "./price";

export interface Bus{
    id:number,
    from:string,
    to:string,
    route:string,
    total_seats:number,
    seats_available:number,
    seats:Seats,
    price:Price,
    destinations:[any],
    departure_time:string,
    arrival_time:string
}        