import { TicketResponse } from './../../models/ticketRes';
import { AuthResponse } from './../../models/AuthRes';
import { ReferenceRes } from './../../models/ReferenceNumberRes';
import { ToastController } from 'ionic-angular';
import { ReservationRes } from './../../models/reservationResponse';
import { AvailableBusResponse } from './../../models/availablebuses';
import { City } from './../../models/city';
import { userAuth } from './../../models/UserAuth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {baseUrl, username, api_key, hash, ReferenceNumberUrl} from  './../../models/constants';
import { responseI } from '../../models/response';
import { locationResponse } from '../../models/locationResponse';
import { travelDateResponse } from '../../models/travelDateResponse';
import { Reservation } from '../../models/reservationI';



@Injectable()
export class AuthenticationProvider {   
  constructor(public http: HttpClient, public toastCtrl: ToastController) {
    console.log('Hello AuthenticationProvider Provider');
    console.log('user Phone Number'+ this.getUserPhoneNumber())
    console.log('Authentication status'+ this.isAuthenticated())

    
  }
  // authenticating users
  authUser(user:userAuth){
    return  this.http.post<AuthResponse>(baseUrl,user)    
  }
  // stores users phone number on successfull login
  storeUserCredentials(phone_number:string, user_email:string){
    window.localStorage.setItem('user_phone_number', phone_number);
    window.localStorage.setItem('user_email_address', user_email);
  }
  logOut(){
    return window.localStorage.removeItem('user_phone_number')
  }
  getUserPhoneNumber(){
    return window.localStorage.getItem('user_phone_number')
  }
  getUserEmailAddress(){
    return window.localStorage.getItem('user_email_address')
  }
  // checks if user is authenticated
  isAuthenticated():boolean {
    if (this.getUserPhoneNumber() == null){
      return false;
    }
    return true;
  }
  // gets all available cities
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
  reserveBooking(from_city:number, to_city:number, travel_date:string, selected_vehicle:number, seater:number, selected_ticket_type:number, selected_seat:number, 
    payment_method:number, phone_number:string, passenger_name:string, email_address:string, id_number:string,
     insurance_charge:string, served_by:string, amount_charged:string, reference_number:string){
    let body:Reservation = {
      username:username,
      api_key:api_key,
      hash:hash,
      action:'ReserveSeats',
      from_city:from_city,
      to_city:to_city,
      travel_date:travel_date,      
      selected_vehicle:selected_vehicle,
      seater:seater,  
      selected_ticket_type:selected_ticket_type, 
      selected_seat:selected_seat,         
      payment_method:payment_method,
      phone_number: phone_number,
      id_number:id_number,
      passenger_name:passenger_name,
      email_address: email_address,
      insurance_charge:insurance_charge,
      served_by:served_by,
      amount_charged: amount_charged,
      reference_number: reference_number
    }
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type':  'application/json',
        'User-Agent':'ionic'

      })
    }
    console.log(body)      
    return this.http.post<ReservationRes>(baseUrl,body,httpOptions)
  }
  reserveBookingPromise(bookingDetails:any){      
    return this.http.post(baseUrl,bookingDetails)    
    .toPromise()
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

getAllCustomerTickets(phone_number:string){
  let body = {
    username:username,
    api_key:api_key,
    action:"SearchTicket",
    identifier:phone_number
  }
  
  return this.http.post<TicketResponse>(baseUrl,body)
}



}
