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
    public modalCtrl: ModalController) {

  }
  ionViewCanEnter(){    
    if(this.authProvider.isAuthenticated() == true){
      console.log("User Is  Authenticated")
      this.phone_number = this.authProvider.getUserPhoneNumber();
      this.getAllTickets();
    }else{
      console.log("User is not authenticated")
      this.authProvider.showToast("Please Log in First")
      setTimeout(() =>{
        this.navCtrl.setRoot('SignInPage')
      },2000)
      
    }
  }

  getAllTickets(){
    let loader = this.loadingCtrl.create({
      content:'Please Wait ... Searching For Tickets'
    });
    loader.present().then(()=>{
      this.authProvider.getAllCustomerTickets('0707200314').subscribe(tickets =>{
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
  LoadMoreDetails(){
    // this.navCtrl.setRoot('CarTabsPage')
    this.modalCtrl.create('TicketDetailsPage')
  }  
  
}
