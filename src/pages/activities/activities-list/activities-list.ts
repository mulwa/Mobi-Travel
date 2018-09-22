
/**
  * @author    ThemesBuckets <themebucketbd@gmail.com>
  * @copyright Copyright (c) 2018
  * @license   Fulcrumy
  * 
  * This File Represent Activities List Component
  * File path - '../../src/pages/activities/activities-list/activities-list'
  */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { DataProvider } from '../../../providers/data/data';


@IonicPage()
@Component({
  selector: 'page-activities-list',
  templateUrl: 'activities-list.html',
})
export class ActivitiesListPage {

  // Array list of activities
  activities: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public dataProvider: DataProvider) {
    this.getActivitiesList();
  }

  /**
   * -----------------------------------------------------------
   * Get List of Activities
   * -----------------------------------------------------------
   * From Data Provider Service Call `getActivities` method that Give You List of Activities
   * 
   * You get `DataProvider` Service at - 'src/providers/data/data';
   */
  getActivitiesList() {
    this.activities = this.dataProvider.getActivities();
  }

  /**
   * Open Details Activity Page
   */
  goToViewDetailsPage() {
    this.dismiss();
    this.modalCtrl.create('ActivitiesDetailsPage').present();
  }

  /**
   * Dismiss function
   * This function dismiss the popup modal
   */
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
