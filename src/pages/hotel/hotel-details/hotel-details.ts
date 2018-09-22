/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This File Represent Details of Hotel Page Component
 * File path - '../../src/pages/hotel/hotel-details/hotel-details'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { DataProvider } from '../../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-hotel-details',
  templateUrl: 'hotel-details.html',
})
export class HotelDetailsPage {

  // Check In Date
  checkInDate: any;

  // Check Out Date
  checkOutDate: any;

  // Array List of Hotels
  hotels: any = [];
  hotelDetails: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public dataProvider: DataProvider) {
    // Get Hotel Details Information
    this.hotelDetails = this.navParams.get('hotelDetails');
    // Current Time For CheckIn (Demo)
    this.checkInDate = new Date();
    // Add 5 days more for Check Out time
    this.checkOutDate = new Date().setTime(new Date().getTime() - (24 * 60 * 60 * 1000) * 5);

    this.getHotelList();
  }

  /**
   * Open Location Map
   */
  openLocationMap() {
    this.modalCtrl.create('LocationMapPage', { address: this.hotelDetails.name }).present();
  }

  goToOrderPage() {
    this.viewCtrl.dismiss();
    this.navCtrl.setRoot('OrderHotelPage', { hotelDetails: this.hotelDetails });
  }

  /**
   * -----------------------------------------------------------
   * Get List of Hotels
   * -----------------------------------------------------------
   * From Data Provider Service Call `getHotels` method that Give You List of Hotel
   * 
   * You get `DataProvider` Service at - 'src/providers/data/data';
   */
  getHotelList() {
    this.hotels = this.dataProvider.getHotels();
  }
}
