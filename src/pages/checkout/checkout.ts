import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TickeType } from './../../models/ticketType';
import { AuthenticationProvider } from './../../providers/authentication/authentication';
/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This File Represent Checkout Page Component
 * File path - '../../src/pages/checkout/checkout'
 */

import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { hash, api_key, username } from '../../models/constants';
import { TicketMessage } from '../../models/ticketMessage';

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage implements  OnInit {
  // Types of Payment
  paymentTypes: any;
  bookingsDetails;

  from_id: number;
  to_id:number;
  travel_date:string;
  selected_vehicle:number;
  seater:number
  arrayofseats:any;
  selected_seat:number;

  ticketCost:number;

  ticketDetails:TickeType;

  checkOutForm:FormGroup;

  tickeRosMessage:TicketMessage;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private frmbuilder:FormBuilder,
    private authProvider:AuthenticationProvider,
    private  loadingCtrl:LoadingController,
    private  toastCtrl:ToastController,
    private alertCtrl:AlertController,
    public viewCtrl: ViewController) {
    this.paymentTypes = 'card'; // Default Payment Type

    this.bookingsDetails = this.navParams.get('data');
    this.from_id =  this.bookingsDetails.from_id;
    this.to_id = this.bookingsDetails.to_id;
    this.travel_date = this.bookingsDetails.travel_date;
    this.selected_vehicle = this.bookingsDetails.selected_vehicle;
    this.seater =  this.bookingsDetails.seater;

    this.arrayofseats = this.bookingsDetails.arrayofseats;
    this.selected_seat = this.bookingsDetails.selected_seat;

    console.log(this.selected_seat);

    this.getTicket();
    this.initializeForm();

  }
  ngOnInit(): void {
    
  }
  initializeForm(){
    this.checkOutForm = this.frmbuilder.group({
      username:username,
      api_key:api_key,
      action:'ReserveSeats',
      from_city:this.from_id,
      to_city:this.to_id,
      travel_date:this.travel_date,
      hash:hash,
      selected_vehicle:this.selected_vehicle,
      seater:this.seater,
      selected_seat:this.selected_seat,
      selected_ticket_type:'1',
      payment_method:'3',
      phone_number:['',Validators.minLength(10)],
      id_number:[''],
      passenger_name:['',Validators.required],
      email_address:[''],
      insurance_charge:'',
      served_by:'test user',
      amount_charged:'',
      reference_number:''

    })
  }
  getTicket(){
    console.log("calling get ticket details");
    this.authProvider.getTicketDetails(this.from_id
      ,this.to_id,this.travel_date,this.selected_vehicle,this.seater,this.selected_seat).subscribe(data =>{
        if(data.response_code ==0){
          this.ticketDetails = data.ticket_type;
          let ticket_price = this.ticketDetails[0].fare_per_ticket;
          console.log('ticket price'+ticket_price);
          this.ticketCost = parseInt(ticket_price) * this.selected_seat;
          console.log('total cost'+this.ticketCost);
        }
      
    })
    
  }

  /***
   * --------------------------------------------------------------
   * Open Payment Page
   * --------------------------------------------------------------
   * @method    goToPaymentPage This Function Close Current Modal and Open Payment Page.
   */
  goToPaymentPage() {
    console.log(this.checkOutForm.value);
    // this.viewCtrl.dismiss();
    // this.navCtrl.setRoot('PaymentPage');
    let loader = this.loadingCtrl.create({
      content: "Please Wait Reserving your Ticket"      
    });
    loader.present().then(()=>{
      this.authProvider.reserveBooking(this.checkOutForm.value).subscribe(data =>{
        loader.dismiss();
        if(data.response_code === 0){          
          this.tickeRosMessage = data.ticket_message;
          let tick_message = this.tickeRosMessage[0].name;
          this.showToast(tick_message);
          this.checkOutForm.reset();
          setTimeout(()=>{
            this.navCtrl.setRoot('HomePage');
          },3000)
        }else{
          this.showAlert("Reservation failed", data.response_message)
        }

      },error =>{
        loader.dismiss();
        console.log('an  error has occured'+error);
      })
    })
  }
  showToast(msg:string){
    let toast = this.toastCtrl.create({
      message : msg,
      duration : 6000,
      position : 'bottom'
    });
    toast.present();
  }
  showAlert(title:string, msg:string){
    const alert = this.alertCtrl.create({
      title:title,
      subTitle:msg,
      buttons:['Ok']
    });
    alert.present();    
  }
  
}
