import { Dates } from './date';
export interface  travelDateResponse {
    response_code:number,
    response_message:string,
    dates?:Dates[]
}