/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This File Represent List of Train Page Component
 * File path - '../../src/pages/train/train-list/train-list'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { DataProvider } from '../../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-train-list',
  templateUrl: 'train-list.html',
})
export class TrainListPage {

  // Array List of Trains
  trains: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public dataProvider: DataProvider) {
    this.getTrainList();
  }

  /**
   * -----------------------------------------------------------
   * Get List of Train
   * -----------------------------------------------------------
   * From Data Provider Service Call `getTrainList` method that Give You List of Train
   * 
   * You get `DataProvider` Service at - 'src/providers/data/data';
   */
  getTrainList() {
    this.trains = this.dataProvider.getTrainList();
  }

  /**
   * Open Train Details Page
   */
  goToViewDetailsPage() {
    this.dismiss();
    this.modalCtrl.create('TrainDetailsPage').present();
  }

  /**
   * Dismiss function
   * This function dismiss the popup modal
   */
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
