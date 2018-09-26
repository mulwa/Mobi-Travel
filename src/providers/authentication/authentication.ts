import { ReservationRes } from './../../models/reservationResponse';
import { AvailableBusResponse } from './../../models/availablebuses';
import { City } from './../../models/city';
import { userAuth } from './../../models/UserAuth';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {baseUrl, username, api_key, hash} from  './../../models/constants';
import { responseI } from '../../models/response';
import { locationResponse } from '../../models/locationResponse';
import { travelDateResponse } from '../../models/travelDateResponse';


@Injectable()
export class AuthenticationProvider {  
  constructor(public http: HttpClient) {
    console.log('Hello AuthenticationProvider Provider');
  }

  authUser(user:userAuth){
    return  this.http.post<responseI>(baseUrl,user)
    
  }
  getCitites(){   
    const cityParams = {
      username: username,
      api_key: api_key,
      action:"AvailableCities"    
    }
    return this.http.post<locationResponse>(baseUrl,cityParams);
  }
  getTravelDates(){
    const cityParams = {
      username: username,
      api_key: api_key,
      action:"AvailableDates"    
    }
    return this.http.post<travelDateResponse>(baseUrl,cityParams);
  }
  getAvaliableVehicle(from:number,to_id:number, travel_date:string){
    let body = {
      username: username,
      api_key: api_key,
      action:"AvailableBuses",
      hash:hash,
      from_city:from,
      to_city:to_id,
      travel_date:travel_date    
    }
    return this.http.post<AvailableBusResponse>(baseUrl,body);

  }

  getVehicleDetails(from:number,to_id:number, travel_date:string,selected_vehicle:number){
    let body = {
      username: username,
      api_key: api_key,
      action:"AvailableSeats",
      hash:hash,
      from_city:from,
      to_city:to_id,
      travel_date:travel_date,
      selected_vehicle:selected_vehicle         
    }
    return this.http.post<responseI>(baseUrl,body);

  }
  getTicketDetails(from:number,to_id:number, travel_date:string,selected_vehicle:number,seater:number,selected_seat:number){
    let body = {
      username: username,
      api_key: api_key,
      action:"TicketTypes",
      hash:hash,
      from_city:from,
      to_city:to_id,
      travel_date:travel_date,
      selected_vehicle:selected_vehicle,
      selected_seat:selected_seat,
      seater:seater     
              
    }
    return this.http.post<responseI>(baseUrl,body);

  }
  reserveBooking(bookingDetails:any){
    console.log(bookingDetails)  
    return this.http.post<ReservationRes>(baseUrl,bookingDetails)

  }

}
