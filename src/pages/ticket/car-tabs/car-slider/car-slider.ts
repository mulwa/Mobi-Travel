/**
* @author    ThemesBuckets <themebucketbd@gmail.com>
* @copyright Copyright (c) 2018
* @license   Fulcrumy
* 
* This File Represent List of Cars for Slider View Component
* File path - '../../src/pages/car/car-tabs/car-slider/car-slider'
*/

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { DataProvider } from '../../../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-car-slider',
  templateUrl: 'car-slider.html',
})
export class CarSliderPage {

  @ViewChild('slider') slider: Slides;

  // Array list of Cars
  cars: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public dataProvider: DataProvider,
    public modalCtrl: ModalController) {
  }

  /** Do any initialization */
  ngOnInit() {
    this.getCarList();
  }

  ngAfterViewInit() {
    this.slider.freeMode = true;
  }

  // Get List of Cars
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
