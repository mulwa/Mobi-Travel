import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Ticket } from '../../models/ticketRes';



@IonicPage()
@Component({
  selector: 'page-ticket-details',
  templateUrl: 'ticket-details.html',
})
export class TicketDetailsPage {
  my_ticket:Ticket;

  constructor(public navCtrl: NavController, 
            public viewCtrl: ViewController,
              public navParams: NavParams) {              

                
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketDetailsPage');
     this.my_ticket = this.navParams.get('data')
     console.log(this.my_ticket.transport_company)
  }
  dismiss() {
    this.viewCtrl.dismiss();    
  }

}
