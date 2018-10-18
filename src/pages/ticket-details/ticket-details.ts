import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { Ticket } from '../../models/ticketRes';
import { AuthenticationProvider } from '../../providers/authentication/authentication';



@IonicPage()
@Component({
  selector: 'page-ticket-details',
  templateUrl: 'ticket-details.html',
})
export class TicketDetailsPage {
  my_ticket:Ticket[];

  constructor(public navCtrl: NavController, 
            public viewCtrl: ViewController,
            public loadingCtrl:LoadingController,
            public authProvider:AuthenticationProvider,
            public navParams: NavParams) { 
              

                
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketDetailsPage');     
    console.log(this.navParams.get('data').reference_number)
    this.getTicket(this.navParams.get('data').reference_number)
  }
  dismiss() {
    this.viewCtrl.dismiss();    
  }
  getTicket(referenceNo){
    let loader = this.loadingCtrl.create({
      content:'Please Wait Loading Ticket .....'
    })
    loader.present().then(()=>{
      loader.dismissAll();
      this.authProvider.getAllCustomerTickets(referenceNo).subscribe(data =>{
        this.my_ticket = data.tickets;
        console.log(this.my_ticket)
      },error =>{
        this.authProvider.showToast('An Error Has Occured Please Try Later'+error)
      })
    })
    
    
  }

}
