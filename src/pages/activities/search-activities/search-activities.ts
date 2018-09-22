/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This File Represent Search Page of Activities Component
 * File path - '../../src/pages/activities/search-activities/search-activities'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Search } from '../../../models/search';
import { CalendarModal, CalendarModalOptions } from 'ion2-calendar';

@IonicPage()
@Component({
  selector: 'page-search-activities',
  templateUrl: 'search-activities.html',
})
export class SearchActivitiesPage {

  searchObjects: Search = new Search();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController) {
  }

  /**
   * -------------------------------------------------------------
   * Open Calendar and Pick Dates
   * -------------------------------------------------------------
   */
  openCalendar() {

    // Calendar Modal Config Options
    const options: CalendarModalOptions = {
      pickMode: 'range',
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
        // Set Departure Date
        this.searchObjects.departureDate = date.from.string;
        // Set Return Date
        this.searchObjects.returnDate = date.to.string;
      }
    })
  }

  /**
   * -------------------------------------------------------------
   * Get Location
   * -------------------------------------------------------------
   * Open Location Search Page and Get Destination Location
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

  // Open Activitiest List Page
  findActivities() {
    const modal = this.modalCtrl.create('ActivitiesListPage');
    modal.present();
  }
}
