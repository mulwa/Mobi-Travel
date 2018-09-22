/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This File Represent Search Component of Train
 * File path - '../../../src/pages/train/search-Train/search-Train'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Search } from '../../../models/search';
import { CalendarModal, CalendarModalOptions } from 'ion2-calendar';


@IonicPage()
@Component({
  selector: 'page-search-train',
  templateUrl: 'search-train.html',
})
export class SearchTrainPage {

  searchObjects: Search = new Search();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController) {
    this.searchObjects.tripType = 'oneWay';
    this.searchObjects.classType = 'business';
  }

  /**
   * -------------------------------------------------------------
   * Open Calendar and Pick Dates
   * -------------------------------------------------------------
   */
  openCalendar() {

    // Calendar Modal Config Options
    const options: CalendarModalOptions = {
      color: 'primary'
    };

    // Create Calendar Modal
    let myCalendar = this.modalCtrl.create(CalendarModal, {
      options: options
    });

    myCalendar.present();

    // When Calendar Modal Dismiss
    myCalendar.onDidDismiss((date: any, type: string) => {
      if (date) {
        // Set CheckIn Date
        this.searchObjects.departureDate = date.string;
      }
    })
  }

  /**
   * -------------------------------------------------------------
   * Open Location Search Page and Get Origin Location
   * -------------------------------------------------------------
   */
  getLocationOrigin() {
    const modal = this.modalCtrl.create('LocationPage');
    modal.onDidDismiss((data: any) => {
      if (data) {
        this.searchObjects.originLocationName = data.name;
        this.searchObjects.originLocationAlpha3Code = data.alpha3Code;
      }
    });
    modal.present();
  }

  /**
   * -------------------------------------------------------------
   * Open Location Search Page and Get Destination Location
   * -------------------------------------------------------------
   */
  getLocationDestination() {
    const modal = this.modalCtrl.create('LocationPage');
    modal.onDidDismiss((data) => {
      if (data) {
        this.searchObjects.destinationLocationname = data.name;
        this.searchObjects.destinationLocationAlpha3Code = data.alpha3Code;
      }
    });
    modal.present();
  }

  /**
   * -------------------------------------------------------------
   * Find Train
   * -------------------------------------------------------------
   */
  findTrain() {
    const modal = this.modalCtrl.create('TrainListPage');
    modal.present();
  }
}
