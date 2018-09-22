/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This File Represent Details of Cruise Component
 * File path - '../../src/pages/cruise/cruise-details/cruise-details'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cruise-details',
  templateUrl: 'cruise-details.html',
})
export class CruiseDetailsPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
  }

  // Open Checkout Page
  goToCheckoutPage() {
    this.navCtrl.setRoot('CheckoutPage');
  }
}
