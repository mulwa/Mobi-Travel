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
  public phone_number:string
  mytickets:Ticket[] = [];
  noofTicketsFound:number;
  bg_image:string = 'assets/imgs/background/img8.jpeg';
  showLoading:boolean = true;

  constructor(public dataProvider: DataProvider,
     public authProvider:AuthenticationProvider,
     public modalCtrl:ModalController,
     public loadingCtrl:LoadingController) {
  }

  /** Do any initialization */
  ngOnInit() {
    this.getRecommendDestination();
    this.getAllTickets();
  }

  ngAfterViewInit() {
    this.slider.freeMode = true;
  }

  getRecommendDestination() {
    this.recommendDestination = this.dataProvider.getRecommendDestination();
  }
  getAllTickets(){    
      this.authProvider.getAllCustomerTickets('0707200314').subscribe(tickets =>{
        this.showLoading = false;        
        if(tickets.response_code == 0){
          this.mytickets = tickets.tickets;
          this.noofTicketsFound = this.mytickets.length;
        }else{
          this.authProvider.showToast(tickets.response_message)
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
