import { Bus } from './bus';
export interface AvailableBusResponse{
    response_code:number,
    response_message:string,
    buses?:Bus[]        
}  