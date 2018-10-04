import { FormBuilder, FormGroup, Validators, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { TickeType } from './../../models/ticketType';
import { AuthenticationProvider } from './../../providers/authentication/authentication';

import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController, AlertController, ModalController } from 'ionic-angular';
import { hash, api_key, username } from '../../models/constants';
import { TicketMessage } from '../../models/ticketMessage';
import { Reservation } from '../../models/reservationI';
import { Observable } from 'rxjs/Observable';
import { map, concatMap, combineLatest,mergeMap } from 'rxjs/operators';
// import { forkJoin, of, interval } from 'rxjs';


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
      payment_method:'', 
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
      served_by:'test user',
      amount_charged:'',
      
    });
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
      let myRequests = [];
      for(let pass= 0; pass < numOfPassangers; pass++){
        console.log('username'+this.passanger.value[pass].from_city)
        let passanger_details:Reservation =  {
          username:username,
          api_key:api_key,
          hash:hash,
          action:'ReserveSeats',
          from_city:this.from_id,
          to_city:this.to_id,
          travel_date:this.travel_date,      
          selected_vehicle:this.selected_vehicle,
          seater:this.seater,  
          selected_ticket_type:this.ticket_type, 
          selected_seat:this.passanger.value[pass].selected_seat,         
          payment_method: this.checkOutForm.get('payment_method').value,
          phone_number: this.passanger.value[pass].phone_number,
          id_number:this.passanger.value[pass].id_number,
          passenger_name: this.passanger.value[pass].passenger_name,
          email_address: this.passanger.value[pass].email_address,
          insurance_charge: this.passanger.value[pass].insurance_charge,
          served_by: this.passanger.value[pass].served_by,
          amount_charged: this.passanger.value[pass].amount_charged,
          reference_number: this.checkOutForm.get('reference_number').value,
        }

        myRequests.push(passanger_details);           
        this.authProvider.reserveBooking(passanger_details).subscribe(data =>{
          console.log(data) 
          loader.dismiss()                 
          if(data.ticket[0].response_code == "0"){                    
            this.tickeRosMessage = data.ticket_message;
            // let tick_message = data.ticket[0].description;
            let tick_message = data.ticket_message[0].name;
            this.showToast(tick_message);
            console.log(tick_message);
            this.checkOutForm.reset();

            // direct users according to payment method
            console.log('selected payment'+passanger_details.payment_method)
            if(passanger_details.payment_method ==2){
              this.openJambopayCheckout(tick_message,2);
            }else if(passanger_details.payment_method ==1){
              this.openWalletCheckOut(tick_message,1);

            }else if (passanger_details.payment_method == 3){              
              this.openCongratulationPage("Mpesa",data.ticket_message[0].name);              
            }
            

          }else{
            this.showAlert("Reservation failed", data.ticket_message[0].name)
          }
        },error =>{
          loader.dismiss();
          console.log('an  error has occured'+error);
        })
      } // end of for loop 
      
    // myRequests.map((p_details, index) =>{
    //    return this.authProvider.reserveBooking(p_details).subscribe(data =>{
         
    //    })        
    //   })
     
      
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
  openCongratulationPage(from,message){ 
    let data = {
      from:from,
      message:message
    }  
    this.modalCtrl.create('CongratulationPage',{data:data}).present();
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
