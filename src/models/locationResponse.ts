import { City } from './city';
export interface  locationResponse {
    response_code:number,
    response_message:string,
    cities?:City[]
}