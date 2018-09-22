/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This File Represent Deals Component
 * File path - '../../src/pages/deals/deals'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-deals',
  templateUrl: 'deals.html',
})
export class DealsPage {

  // Array list of Deals
  deals: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public dataProvider: DataProvider) {
    this.getDeals();
  }

  /**
   * -----------------------------------------------------------
   * Get List of Deals
   * -----------------------------------------------------------
   * From Data Provider Service Call `getDeals` method that Give You List of Deals
   * 
   * You get `DataProvider` Service at - 'src/providers/data/data';
   */
  getDeals() {
    this.deals = this.dataProvider.getDeals();
  }
}
