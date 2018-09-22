/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This File Represent Search Component of Hotel
 * File path - '../../../src/pages/hotel/search-hotels/search-hotels'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Search } from '../../../models/search';
import { CalendarModal, CalendarModalOptions } from 'ion2-calendar';


@IonicPage()
@Component({
  selector: 'page-search-hotels',
  templateUrl: 'search-hotels.html',
})
export class SearchHotelsPage {

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
        // Set CheckIn Date
        this.searchObjects.departureDate = date.from.string;
        // Set CheckOut Date
        this.searchObjects.returnDate = date.to.string;
      }
    })
  }

  /**
   * -------------------------------------------------------------
   * Open Location Search Page and Get Origin Location
   * -------------------------------------------------------------
   */
  getLocation() {
    const modal = this.modalCtrl.create('LocationPage');
    modal.onDidDismiss((data: any) => {
      if (data) {
        this.searchObjects.originLocationName = data.name;
      }
    });
    modal.present();
  }

  /**
   * -------------------------------------------------------------
   * Find Flights
   * -------------------------------------------------------------
   */
  findHotels() {
    const modal = this.modalCtrl.create('HotelListPage');
    modal.present();
  }
}
