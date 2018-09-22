/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This File Represent List of Cruise Component
 * File path - '../../src/pages/cruise/cruise-list/cruise-list'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { DataProvider } from '../../../providers/data/data';


@IonicPage()
@Component({
  selector: 'page-cruise-list',
  templateUrl: 'cruise-list.html',
})
export class CruiseListPage {

  // Array list of cruise
  cruises: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public dataProvider: DataProvider) {
    this.getCruiseList();
  }

  /**
   * -----------------------------------------------------------
   * Get List of Cruises
   * -----------------------------------------------------------
   * From Data Provider Service Call `getCruiseList` method that Give You List of Cruises
   * 
   * You get `DataProvider` Service at - 'src/providers/data/data';
   */
  getCruiseList() {
    this.cruises = this.dataProvider.getCruiseList();
  }

  /**
   * Open Cruise Details Page
   */
  goToViewDetailsPage() {
    this.dismiss();
    this.modalCtrl.create('CruiseDetailsPage').present();
  }

  /**
   * Dismiss function
   * This function dismiss the popup modal
   */
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
