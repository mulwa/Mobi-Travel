/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This File Represent Search Component of Cruise
 * File path - '../../../src/pages/cruise/search-cruise/search-cruise'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Search } from '../../../models/search';
import { CalendarModal, CalendarModalOptions } from 'ion2-calendar';

@IonicPage()
@Component({
  selector: 'page-search-cruise',
  templateUrl: 'search-cruise.html',
})
export class SearchCruisePage {

  searchObjects: Search = new Search();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController) {
  }

  /**
   * -------------------------------------------------------------
   * Open Calendar and Pick Departure Date
   * -------------------------------------------------------------
   */
  pickDepartureDate() {
    const modal = this.modalCtrl.create('CalendarPage');
    modal.onDidDismiss((data) => {
      if (data) {
        this.searchObjects.departureDate = data;
      }
    });
    modal.present();
  }

  /**
   * -------------------------------------------------------------
   * Open Calendar and Pick Date
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
   * Open Location Search Page and Get Destination Location
   * -------------------------------------------------------------
   */
  getLocationDestination() {
    const modal = this.modalCtrl.create('LocationPage');
    modal.onDidDismiss((data) => {
      if (data) {
        this.searchObjects.destinationLocationname = data.name;
      }
    });
    modal.present();
  }

  /**
   * -------------------------------------------------------------
   * Find Cruise
   * -------------------------------------------------------------
   */
  findCruise() {
    const modal = this.modalCtrl.create('CruiseListPage');
    modal.present();
  }
}
