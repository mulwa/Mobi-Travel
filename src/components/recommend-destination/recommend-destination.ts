import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { Component, ViewChild } from '@angular/core';
import { Slides, LoadingController, ModalController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Ticket } from '../../models/ticketRes';

@Component({
  selector: 'recommend-destination',
  templateUrl: 'recommend-destination.html'
})
export class RecommendDestinationComponent {

  @ViewChild('slider') slider: Slides;

  // List of Recommend Destination
  recommendDestination: any = []; 
  mytickets:Ticket[] = [];
  noofTicketsFound:number;
  bg_image:string = 'assets/imgs/background/';  
  showLoading:boolean = true;

  constructor(public dataProvider: DataProvider,
     public authProvider:AuthenticationProvider,
     public modalCtrl:ModalController,
     public loadingCtrl:LoadingController) {
  }

  /** Do any initialization */
  ngOnInit() {
    // this.getRecommendDestination();
    this.getAllTickets();
  }
  ngAfterViewInit() {
    // this.slider.freeMode = true;
  }

  checkStatus(ticket:Ticket):string{
    let image;    
    ticket.status == 'pending' ? image = "confirmed_ticket.png": image = "img9.jpeg"
    return this.bg_image+image;
  }
  getAllTickets(){     
      this.authProvider.getAllCustomerTickets(this.authProvider.getUserPhoneNumber() ).subscribe(tickets =>{
        this.showLoading = false;        
        if(tickets.response_code == 0){
          this.mytickets = tickets.tickets;
          this.noofTicketsFound = this.mytickets.length;
        }else{
          // this.authProvider.showToast(tickets.response_message)
        }
        console.log(tickets)
      })      
        
  }

  LoadMoreDetails(){
    // this.navCtrl.setRoot('CarTabsPage')
    console.log('load ticket details clicked')
    this.modalCtrl.create('TicketDetailsPage')
  }

}
