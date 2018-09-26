import { Seats } from './../../../models/seats';
/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This File Represent Bus Details Component
 * File path - '../../src/pages/bus/bus-details/bus-details'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AuthenticationProvider } from '../../../providers/authentication/authentication';

@IonicPage()
@Component({
  selector: 'page-bus-details',
  templateUrl: 'bus-details.html',
})
export class BusDetailsPage {
  busdetails:any;
  traveldetails:any;
  from_id:number;
  to_id:number;
  travel_date:string;
  selected_vehicle:number;

  newBussDetails:Seats;
  

  departureDate: any;
  totalSeats: number;
  seatsArray;

  seatsSelected:any;
  no_of_seats:number;
  seater:string;

  to_name:string;
  from_name:string;
  selected_bus_name:string;

  ticketPrice: number = 10;  
  totalPrice: number = 0;
  currency: string = "Ksh"; 

  seatSelectedForBooking: string[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl:LoadingController,
    private authProvider: AuthenticationProvider) {
    this.departureDate = new Date();

    this.busdetails = navParams.get('busDetails');
      this.selected_bus_name = this.busdetails.selected_bus_name;
      this.from_id  = this.busdetails.from_id;
      this.to_id = this.busdetails.to_id;
      this.travel_date= this.busdetails.travel_date;
      this.selected_vehicle  = this.busdetails.selected_vehicle;
      this.to_name = this.busdetails.to_name;
      this.from_name = this.busdetails.from_name;

    
      this.getVehicleDetails();
  }

  getVehicleDetails(){
    let loader = this.loadingCtrl.create({
      content: "Please Wait..."      
    });
    loader.present().then(()=>{
      this.authProvider.getVehicleDetails(this.from_id
        ,this.to_id,this.travel_date,this.selected_vehicle).subscribe(data =>{          
          loader.dismiss();
          if(data.response_code == 0){
          this.newBussDetails  =  data.seats;
          this.seater = this.newBussDetails[0].seater;
          console.log('seater is '+this.seater);
          this.seatsArray = this.newBussDetails[0].name.split(',');
          this.totalSeats  = this.seatsArray.length;
          console.log(this.seatsArray);
          console.log("No seats available"+this.totalSeats);

          }
          
        },erro =>{
          loader.dismiss();
        })

    })
    
  }

  // Open Checkout Page
  goToCheckoutPage() {
    // seatsSelected
    console.log(this.seatSelectedForBooking);
    this.no_of_seats = this.seatSelectedForBooking.length;
    console.log('no of seats selected'+this.no_of_seats);
    let bookingDetails = {
      from_id: this.from_id,
      to_id:this.to_id,
      travel_date:this.travel_date,
      selected_vehicle:this.selected_vehicle,
      seater:this.seater,
      arrayofseats:this.seatSelectedForBooking,
      selected_seat: this.no_of_seats
    }
    console.log('booking details '+bookingDetails)
    this.navCtrl.setRoot('CheckoutPage',{data:bookingDetails});   
    
  }
  //return status of each seat  
  checkIfselected(seatPos){
    if(this.seatSelectedForBooking){
      if(this.seatSelectedForBooking.indexOf(seatPos) !== -1){
        return 'selected';
      }else{
        return 'not-selected'
      }
    }
  }
  //click handler
  seatSelected(seat){
    console.log(seat)
    let inded = this.seatSelectedForBooking.indexOf(seat);
    console.log(inded)
    if(inded !== -1){
      this.seatSelectedForBooking.splice(inded,1)
    }else{
      console.log("pushing to  array")
      this.seatSelectedForBooking.push(seat)
    }
  }
  //clear handler
  clearBooking(){
    this.seatSelectedForBooking = [];
    console.log('clearing called');
  }
  
  
   //Buy button handler
   showSelected = function() {
    if(this.selected.length > 0) {
        alert("Selected Seats: " + this.selected + "\nTotal: "+(this.ticketPrice * this.selected.length + this.convFee));
    } else {
        alert("No seats selected!");
    }
  }
  

}
