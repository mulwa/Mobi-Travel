/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This File Represent Home Page Component
 * File path - '../../src/pages/home/home'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController) {
    this.menuCtrl.enable(true); // Enable SideMenu
  }

  /**
   * Open Search Page
   */
  goToSearchPage() {
    this.navCtrl.setRoot('SearchPage');
  }
  loadAllTickets(){
    this.navCtrl.setRoot('SearchTicketPage');
  }
}

