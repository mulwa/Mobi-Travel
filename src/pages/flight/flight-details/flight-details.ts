/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This File Represent Details of Flight Component
 * File path - '../../src/pages/flight/flight-details/flight-details'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-flight-details',
  templateUrl: 'flight-details.html',
})
export class FlightDetailsPage {

  // Departure Date
  departureDate: any;

  // Arrival Date
  arrivalDate: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {

    // Current Time For Departure (Demo)
    this.departureDate = new Date();

    // Add 5 days more for arrival time
    this.arrivalDate = new Date().setTime(new Date().getTime() - (24 * 60 * 60 * 1000) * 5);
  }

  // Open Checkout Page
  goToCheckoutPage() {
    this.navCtrl.setRoot('CheckoutPage');
  }
}

