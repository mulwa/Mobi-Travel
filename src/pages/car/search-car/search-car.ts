/**
* @author    ThemesBuckets <themebucketbd@gmail.com>
* @copyright Copyright (c) 2018
* @license   Fulcrumy
* 
* This File Represent Search Page of Car Component
* File path - '../../src/pages/car/search-car/search-car'
*/

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Search } from '../../../models/search';
import { CalendarModal, CalendarModalOptions } from 'ion2-calendar';

@IonicPage()
@Component({
  selector: 'page-search-car',
  templateUrl: 'search-car.html',
})
export class SearchCarPage {

  searchObjects: Search = new Search();
  myDate = new Date().toISOString();

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
        // Set Pick Up Date
        this.searchObjects.departureDate = date.from.string;
        // Set Pick Off Date
        this.searchObjects.returnDate = date.to.string;
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

  findCar() {
    const modal = this.modalCtrl.create('CarTabsPage');
    modal.present();
  }

}
