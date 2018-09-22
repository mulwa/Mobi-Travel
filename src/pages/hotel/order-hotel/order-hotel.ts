/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This File Represent Order Page of Hotel Component
 * File path - '../../../src/pages/hotel/order-hotel/order-hotel'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-order-hotel',
  templateUrl: 'order-hotel.html',
})
export class OrderHotelPage {
  // Details of Hotel
  hotelDetails: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController) {
    this.hotelDetails = this.navParams.get('hotelDetails');
  }

  // Open Hotel Location Map Page
  openLocationMap() {
    this.modalCtrl.create('LocationMapPage', { address: this.hotelDetails.name }).present();
  }

  // Open CHeckout Page
  goToCheckoutPage() {
    this.navCtrl.setRoot('CheckoutPage');
  }
}
