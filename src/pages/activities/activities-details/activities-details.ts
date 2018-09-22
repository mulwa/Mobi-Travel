/**
* @author    ThemesBuckets <themebucketbd@gmail.com>
* @copyright Copyright (c) 2018
* @license   Fulcrumy
* 
* This File Represent Activities Details Component
* File path - '../../src/pages/activities/activities-details/activities-details'
*/

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-activities-details',
  templateUrl: 'activities-details.html',
})
export class ActivitiesDetailsPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
  }

  // Open Checkout Page
  goToCheckoutPage() {
    this.navCtrl.setRoot('CheckoutPage');
  }
}
