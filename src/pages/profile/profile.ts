/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This File Represent Profile Page Component
 * File path - '../../src/pages/profile/profile'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  // Segment Options
  options: any = 'User Info';

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
  }
}
