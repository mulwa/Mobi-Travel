import { AuthenticationProvider } from './../../providers/authentication/authentication';
/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This File Represent Congratulation Page Component
 * File path - '../../src/pages/congratulation/congratulation'
 */

import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { Ticket } from '../../models/ticketRes';

@IonicPage()
@Component({
  selector: 'page-congratulation',
  templateUrl: 'congratulation.html',
})
export class CongratulationPage {
  navDetails:any;
  my_ticket:Ticket[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public authProvider:AuthenticationProvider,
    public loadingCtrl:LoadingController,
    public appCtrl: App) {

      // this.navDetails =  navParams.get('data');      

     }
     ionViewDidLoad() {
      console.log('ionViewDidLoad TicketDetailsPage');     
      console.log(this.navParams.get('data'))
      this.getTicket(this.navParams.get('data'))
    }
    

  /***
   * --------------------------------------------------------------
   * Dismiss Modal
   * --------------------------------------------------------------
   * @method    dismiss
   */
  goHome() {
    // this.viewCtrl.dismiss();
    this.navCtrl.setRoot('HomePage');
    
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
