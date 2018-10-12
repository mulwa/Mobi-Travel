/**
* @author    ThemesBuckets <themebucketbd@gmail.com>
* @copyright Copyright (c) 2018
* @license   Fulcrumy
* 
* This File Represent Car Details Component
* File path - '../../src/pages/car/car-details/car-details'
*/

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-car-details',
  templateUrl: 'car-details.html',
})
export class CarDetailsPage {

  // Pick Up Date
  pickUpDate: any;

  // Pick Off Date
  pickOffDate: any;

  // Car Details Info
  carDetails: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {

    // Get Car Details 
    this.carDetails = this.navParams.get('carDetails');

    // Set Current Date of Pick Up( For Demo)
    this.pickUpDate = new Date();

    // Add 5 Days for Pick Off Date( For Demo)
    this.pickOffDate = new Date().setTime(new Date().getTime() - (24 * 60 * 60 * 1000) * 5);
  }

  // Open Checkout Page
  goToCheckoutPage() {
    this.navCtrl.setRoot('CheckoutPage');
  }
}
