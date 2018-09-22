/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This File Represent Details of Train Page Component
 * File path - '../../src/pages/train/train-details/train-details'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-train-details',
  templateUrl: 'train-details.html',
})
export class TrainDetailsPage {

  // Departure Date
  departureDate: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {
    this.departureDate = new Date();
  }

  // Open Checkout Page
  goToCheckoutPage() {
    this.navCtrl.setRoot('CheckoutPage');
  }
}

