import { Seats } from './../../../models/seats';
/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This File Represent Bus Details Component
 * File path - '../../src/pages/bus/bus-details/bus-details'
 */

import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AuthenticationProvider } from '../../../providers/authentication/authentication';

@IonicPage()
@Component({
  selector: 'page-bus-details',
  templateUrl: 'bus-details.html',
})
export class BusDetailsPage implements OnInit { 
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

  // 49seater seat format
  seater_49_seats:any;
  first_row:any;
  second_row:any;
  third_row:any;
  fourth_row:any;
  fifth_row:any;

  // 11seater seat format
  seater_11_seats:any;
  first_col:any;
  second_col:any;
  third_col:any;

  // icons name
  icon;

  

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl:LoadingController,
    private authProvider: AuthenticationProvider) {
    this.departureDate = new Date();

    this.icon = "close";

    this.busdetails = navParams.get('busDetails');
      this.selected_bus_name = this.busdetails.selected_bus_name;
      this.from_id  = this.busdetails.from_id;
      this.to_id = this.busdetails.to_id;
      this.travel_date= this.busdetails.travel_date;
      this.selected_vehicle  = this.busdetails.selected_vehicle;
      this.to_name = this.busdetails.to_name;
      this.from_name = this.busdetails.from_name;

      console.log(this.busdetails)

    
      this.getVehicleDetails();
      this.initializeSeater11();
      this.initializeSeater49();

     
      
  } 
  ngOnInit(): void {
   
     
    
  }

  initializeSeater49():void{
    this.first_row  = ['1A','3A','5A','7A','9A','11A','13A','15A','17A','19A','21A','23A'];
    this.second_row = ['2A','4A','6A','8A','10A','12A','14A','16A','18A','20A','22A','24A'];
    this.third_row  = ['25'],
    this.fourth_row  = ['1B','3B','5B','7B','9B','11B','13B','15B','17B','19B','21B','23B'];
    this.fifth_row = ['2B','4B','6B','8B','10B','12B','14B','16B','18B','20B','22B','24B'];
    
    // combine all arrays to make one array
    this.seater_49_seats = this.fifth_row.concat(this.first_row,this.third_row,this.fourth_row,this.fifth_row);
    
  }
  initializeSeater11(){
    this.first_col = ['1','2','5','8'];
    this.second_col = ['1x','3','6','9'];
    this.third_col = ['0','4','7','10']; 
    // combine all the 11 seater array to one
    this.seater_11_seats = this.second_col.concat(this.second_col, this.third_col);
   
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
          // this is an array of all available seats
          this.seatsArray = this.newBussDetails[0].name.split(',');
          this.totalSeats  = this.seatsArray.length;
          console.log(this.seatsArray);
          console.log("No seats available"+this.totalSeats);
          // initialize bus format based on the number of seats returned

          if(this.seater === '11'){
            this.initializeSeater11();
          }else{
            this.initializeSeater49();
          }     

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
  // 49 seater checking  if its available for booking
  checkIfAvailable(seatPos):boolean{ 
    console.log('available seats No :'+this.seatsArray)    
      if(this.seatsArray.includes(seatPos)){        
        return false;        
      }else{       
        return true;
      }    
  }
  // 11 seater checking if its available
  isElevenSeaterAvailable(seatPos){
    if(this.seatsArray.includes(seatPos)){     
      return false;     
    }else{      
      return true;
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
  
  
   //show seat not available
   seatNotAvailable(seatNo){
    this.authProvider.showToast(`Seat Number ${seatNo} is Already Reserved Please Select Another One`);
   }
   
  

}
