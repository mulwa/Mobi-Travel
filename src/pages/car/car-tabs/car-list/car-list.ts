/**
* @author    ThemesBuckets <themebucketbd@gmail.com>
* @copyright Copyright (c) 2018
* @license   Fulcrumy
* 
* This File Represent List of Cars Component
* File path - '../../src/pages/car/car-tabs/car-list/car-list'
*/

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DataProvider } from '../../../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-car-list',
  templateUrl: 'car-list.html',
})
export class CarListPage {

  // Array list of Cars
  cars: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public dataProvider: DataProvider) {
    this.getCarList();
  }

  /**
   * -----------------------------------------------------------
   * Get List of Cars
   * -----------------------------------------------------------
   * From Data Provider Service Call `getCarList` method that Give You List of Car
   * 
   * You get `DataProvider` Service at - 'src/providers/data/data';
   */
  getCarList() {
    this.cars = this.dataProvider.getCarList();
  }

  /**
   * Open Car Details Page
   */
  viewDetails(carDetails) {
    this.modalCtrl.create('CarDetailsPage', { carDetails: carDetails }).present();
  }
}
