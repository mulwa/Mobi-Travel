/**
* @author    ThemesBuckets <themebucketbd@gmail.com>
* @copyright Copyright (c) 2018
* @license   Fulcrumy
* 
* This File Represent Tabs of Car View Component
* File path - '../../src/pages/car/car-tabs/car-tabs'
*/

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-car-tabs',
  templateUrl: 'car-tabs.html',
})
export class CarTabsPage {

  tab1: string = 'CarSliderPage';
  tab2: string = 'CarListPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
