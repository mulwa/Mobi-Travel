/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This File Represent Payment Page Component
 * File path - '../../src/pages/payment/payment'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  // Selected Card
  selectedCard: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController) {
    this.selectedCard = 'visa'; // Set By Default Selected Card
  }

  // Open Congratulation Page
  openCongratulationPage() {
    this.viewCtrl.dismiss();
    this.modalCtrl.create('CongratulationPage').present();
  }
}
