import { ReferenceRes } from './../../models/ReferenceNumberRes';
import { ToastController } from 'ionic-angular';
import { ReservationRes } from './../../models/reservationResponse';
import { AvailableBusResponse } from './../../models/availablebuses';
import { City } from './../../models/city';
import { userAuth } from './../../models/UserAuth';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {baseUrl, username, api_key, hash, ReferenceNumberUrl} from  './../../models/constants';
import { responseI } from '../../models/response';
import { locationResponse } from '../../models/locationResponse';
import { travelDateResponse } from '../../models/travelDateResponse';


@Injectable()
export class AuthenticationProvider {  
  constructor(public http: HttpClient, public toastCtrl: ToastController) {
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
    console.log(body)
    return this.http.post<responseI>(baseUrl,body);

  }
  reserveBooking(bookingDetails:any){    
    return this.http.post<ReservationRes>(baseUrl,bookingDetails)

  }
  generateReferenceNumber(){  
  let body = {
    developer_username: username,
    developer_api_key: api_key,
    action:"generatereferencenumber"
  }
return this.http.put<ReferenceRes>(ReferenceNumberUrl,body);

}
authorizeJamboPayment(jambopay_username, password, referenceNo){
  let body = {
  username:username,
	api_key:api_key,
	action:"AuthorizePayment",
	payment_method:"2",
	reference_number:referenceNo,
  jambopay_wallet_username:jambopay_username,
  jambopay_wallet_password:password
}
console.log('authorizeJamboPayment value set to server'+JSON.stringify(body))
return this.http.post<responseI>(baseUrl,body);

}
authorizeWalletPayment(wallet_username, password, referenceNo){
  let body = {
  username:username,
	api_key:api_key,
	action:"AuthorizePayment",
	payment_method:"1",
	reference_number:referenceNo,
  jambopay_agency_username:wallet_username,
  jambopay_agency_password:password
}
console.log('authorizeWalletPayment value set to server'+JSON.stringify(body))
return this.http.post<responseI>(baseUrl,body);

}

  showToast(msg:string){
    let toast = this.toastCtrl.create({
      message : msg,
      duration : 5000,
      position : 'bottom'
    });
    toast.present();
  }

}
