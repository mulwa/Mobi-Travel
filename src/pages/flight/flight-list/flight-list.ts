/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This File Represent List of Flight Component
 * File path - '../../src/pages/flight/flight-list/flight-list'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { DataProvider } from '../../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-flight-list',
  templateUrl: 'flight-list.html',
})
export class FlightListPage {

  // Array List of Flight
  flights: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public dataProvider: DataProvider) {
    this.getFlightList();
  }

  /**
   * -----------------------------------------------------------
   * Get List of Flight
   * -----------------------------------------------------------
   * From Data Provider Service Call `getFlightList` method that Give You List of Flight
   * 
   * You get `DataProvider` Service at - 'src/providers/data/data';
   */
  getFlightList() {
    this.flights = this.dataProvider.getFlightList();
  }

  /**
   * Open Flight Details Page
   */
  goToViewDetailsPage() {
    this.dismiss();
    this.modalCtrl.create('FlightDetailsPage').present();
  }

  /**
   * Dismiss function
   * This function dismiss the popup modal
   */
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
