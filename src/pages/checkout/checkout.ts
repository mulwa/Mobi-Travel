import { ReservationRes } from './../../models/reservationResponse';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { TickeType } from './../../models/ticketType';
import { AuthenticationProvider } from './../../providers/authentication/authentication';

import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController, AlertController, ModalController } from 'ionic-angular';
import { hash, api_key, username } from '../../models/constants';
import { TicketMessage } from '../../models/ticketMessage';
import { Reservation } from '../../models/reservationI';
import { Observable } from 'rxjs/Observable';
// import { forkJoin, of, interval } from 'rxjs';
import 'rxjs/add/observable/forkJoin';




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
  passangers: FormArray;
  
  tickeRosMessage:TicketMessage; 
  
  ticket_type:any;


  responseCollection:Observable<any>;   

  constructor(public navCtrl: NavController,
    public  navParams: NavParams,
    private frmbuilder:FormBuilder,
    private authProvider:AuthenticationProvider,
    private loadingCtrl:LoadingController,
    private toastCtrl:ToastController,
    private alertCtrl:AlertController,
    private modalCtrl: ModalController,
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


    console.log('selected seats'+ this.selected_seat);
    

    this.getTicket();
    
    this.initializeForm();  

  }
  ngOnInit(): void {
    console.log('number of selected seats'+this.arrayofseats.length)
    for(let num = 0; num < this.arrayofseats.length; num++){
      console.log('Loop seat Number' + this.arrayofseats[num])
      // assign seat to passangers
      let p_seat = this.arrayofseats[num].trim();
      this.addPassanger(p_seat); 
   
    }     
  }
  initializeForm(){
    this.checkOutForm = this.frmbuilder.group({       
      payment_method:['',Validators.required], 
      reference_number:this.getReferenceNumber(),       
      passangers: this.frmbuilder.array([])

    })
    // call get reference method to get mpesa reference no
    this.getReferenceNumber()
  }
  createItem(seat): FormGroup {
    return this.frmbuilder.group({          
      phone_number:['',Validators.minLength(10)],
      id_number:[''],
      passenger_name:['',Validators.required],
      email_address:[''],
      selected_seat: seat,
      insurance_charge:'',
      served_by:'Ionic App',
      amount_charged:'',
      
    });
  }
  get passenger_name(){
    return this.checkOutForm.get('passangers').get('passenger_name') as FormControl

  }
  get phone_number(){
    return this.checkOutForm.get('passangers').get('phone_numbers') as FormControl
  }
  get id_number(){
    return this.checkOutForm.get('passenger').get('id_number') as FormControl
  }
  get email_address(){
    return this.checkOutForm.get('passenger').get('email_address') as FormControl
  }
  getReferenceNumber(){
  this.authProvider.generateReferenceNumber().subscribe(data =>{    
    this.checkOutForm.get('reference_number').setValue(data.reference_number);
    
  })
  }
  get reference(){
    return  this.checkOutForm.get('reference_number') as  FormControl;
  }
  get payment_method(){
    return  this.checkOutForm.get('payment_method').value as  FormControl;
  }
  get passanger() {
    return this.checkOutForm.get('passangers') as FormArray;
  }
  
  addPassanger(p_seat):void{
    this.passangers = this.checkOutForm.get('passangers') as FormArray;    
    this.passangers.push(this.createItem(p_seat))
  }
  getTicket(){
    console.log("calling get ticket details");
    this.authProvider.getTicketDetails(this.from_id
      ,this.to_id,this.travel_date,this.selected_vehicle,this.seater,this.selected_seat).subscribe(data =>{
        if(data.response_code ==0){
          this.ticketDetails = data.ticket_type;
          let ticket_price = this.ticketDetails[0].fare_per_ticket;
          this.ticket_type = data.ticket_type[0].id;
          console.log('ticket_type'+this.ticket_type);
          console.log('seats selected'+this.selected_seat)
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
    let numOfPassangers = this.checkOutForm.get('passangers').value.length;    
    let loader = this.loadingCtrl.create({
      content: "Please Wait Reserving your Ticket",
      dismissOnPageChange: true     
    });
    loader.present().then(()=>{     
      for(let pass= 0; pass < numOfPassangers; pass++){
         let from_city = this.from_id
         let to_city = this.to_id
         let travel_date = this.travel_date      
         let selected_vehicle = this.selected_vehicle
         let seater = this.seater  
         let selected_ticket_type = this.ticket_type 
         let selected_seat = this.passanger.value[pass].selected_seat         
         let payment_method = this.checkOutForm.get('payment_method').value  
         let phone_number =this.passanger.value[pass].phone_number; 
         let passenger_name = this.passanger.value[pass].passenger_name;
         let email_address =  this.passanger.value[pass].email_address;
         let id_number =      this.passanger.value[pass].id_number;
         let insurance_charge = this.passanger.value[pass].insurance_charge;
         let served_by = this.passanger.value[pass].served_by;
         let amount_charged =  "";
         let reference_number =  this.checkOutForm.get('reference_number').value;        
        
        
        // reference_number: this.checkOutForm.get('reference_number').value,       
        setTimeout(()=>{                 
          this.authProvider.reserveBooking(from_city, to_city,travel_date,selected_vehicle,seater,selected_ticket_type,selected_seat,payment_method,phone_number,passenger_name, email_address,id_number,insurance_charge,served_by,amount_charged,reference_number).subscribe(data =>{
            console.log(data) 
            loader.dismiss()                 
            if(data.ticket[0].response_code == "0"){                    
              this.tickeRosMessage = data.ticket_message;
              // let tick_message = data.ticket[0].description;
              let tick_message = data.ticket_message[0].name;
              let reference_no = data.ticket[0].reference_number;
              this.showToast(tick_message);
              console.log("Reference NO"+reference_no);
              this.checkOutForm.reset();

              console.log()
  
              // direct users according to payment method
              console.log('selected payment'+payment_method)
              if(payment_method ==2){
                this.openJambopayCheckout(tick_message,2);
              }else if(payment_method ==1){
                this.openWalletCheckOut(tick_message,1);  
              }else if (payment_method == 3){ 
                console.log('ReferenceNo from Checkout' +reference_no)             
                this.openMpesaCheckout(tick_message,3,reference_no);              
              }           
  
            }else{
              this.showAlert("Reservation failed", data.ticket_message[0].name)
            }
          },error =>{
            loader.dismiss();
            console.log('an  error has occured'+error);
          })

        },500);
        
      } // end of for loop     
      
     
      
    })
    // loader Present()
  }
  // end gotopayment()
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
  openMpesaCheckout(message,id, reference_no){ 
    let data = {      
      message:message,
      reference_no:reference_no,
      id:id
    }  
    this.modalCtrl.create('MpesaCheckoutPage',{data:data}).present();
  }
  openJambopayCheckout(message, id){
    let data = {
      message: message,
      id:id
    }
    this.modalCtrl.create('JambopayCheckoutPage',{data:data}).present();
  }
  openWalletCheckOut(message, id){
    let data = {
      message: message,
      id:id
    }
    this.modalCtrl.create('WalletCheckoutPage',{data:data}).present();
  }
  
}
