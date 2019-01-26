import { Bus } from '../models/bus';

export interface BusDetails{
    response_code:number,
    response_message:string,
    bus?:Bus[]
     
} 
