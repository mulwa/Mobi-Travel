/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This File Represent List of Hotel Page Component
 * File path - '../../src/pages/hotel/hotel-list/hotel-list'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { DataProvider } from '../../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-hotel-list',
  templateUrl: 'hotel-list.html',
})
export class HotelListPage {

  // Array List of Hotels
  hotels: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public dataProvider: DataProvider) { }

  /** Do any initialization */
  ngOnInit() {
    this.getHotelList();
  }

  /**
   * -----------------------------------------------------------
   * Get List of Hotel
   * -----------------------------------------------------------
   * From Data Provider Service Call `getHotels` method that Give You List of Hotel
   * 
   * You get `DataProvider` Service at - 'src/providers/data/data';
   */
  getHotelList() {
    this.hotels = this.dataProvider.getHotels();
  }

  /**
   * Open Hotel Details Page
   */
  viewDetails(hotel) {
    this.dismiss();
    this.modalCtrl.create('HotelDetailsPage', { hotelDetails: hotel }).present();
  }

  /**
   * Dismiss function
   * This function dismiss the popup modal
   */
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
