import { NetworkProvider } from './../../../providers/network/network';
import { AuthenticationProvider } from './../../../providers/authentication/authentication';
/**
* @author    ThemesBuckets <themebucketbd@gmail.com>
* @copyright Copyright (c) 2018
* @license   Fulcrumy
* 
* This File Represent Search Page of Car Component
* File path - '../../src/pages/car/search-car/search-car'
*/

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,LoadingController } from 'ionic-angular';
import { Ticket } from '../../../models/ticketRes';

@IonicPage()
@Component({
  selector: 'page-search-ticket',
  templateUrl: 'search-ticket.html',
})
export class SearchTicketPage  {
  public phone_number:string
  mytickets:Ticket[];
  noofTicketsFound:number; 
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl:LoadingController,    
    public authProvider:AuthenticationProvider,
    private networkProvider:NetworkProvider,
    public modalCtrl:ModalController) {

  }
  ionViewCanEnter(){    
    if(this.authProvider.isAuthenticated() == true){
      console.log("User Is  Authenticated")
      this.phone_number = this.authProvider.getUserPhoneNumber();
      this.getAllTickets(this.phone_number);
    }else{
      console.log("User is not authenticated")     
      this.navCtrl.setRoot('SignInPage')  
      
    } 
  }
  ionViewDidEnter(){
    this.networkProvider.checkOnConnectionStatus()
    this.networkProvider.checkOnDisconnectionStatus()
  }
  ionViewWillLeave(){
    this.networkProvider.unSubscribeNetwork()
  }

  getAllTickets(phone_number){
    let loader = this.loadingCtrl.create({
      content:'Please Wait ... Searching For Tickets'
    });
    loader.present().then(()=>{
      this.authProvider.getAllCustomerTickets(phone_number).subscribe(tickets =>{
        loader.dismissAll();
        if(tickets.response_code == 0){
          this.mytickets = tickets.tickets;
          this.noofTicketsFound = this.mytickets.length;
        }else{
          this.authProvider.showToast(tickets.response_message)
        }
        console.log(tickets)
      }) 
      
    })     
  }
  LoadMoreDetails(ticket:Ticket){    
    console.log('load ticket details clicked')
   this.modalCtrl.create('TicketDetailsPage',{data:ticket}).present()
  
   
  }  
  
}
