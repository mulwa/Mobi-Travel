/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This File Represent Notification Page Component
 * File path - '../../src/pages/notification/notification'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  // List of Notification
  allNotifications: any = [
    'The Magnolia Hotel & Spa',
    'Best Western Oasis Inn',
    'Georgia Aquarium Admission',
    'Visit Japan with sightseeing',
    'Urban Adventure Quest- Atlanta'
  ];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  close() {
    this.viewCtrl.dismiss();
  }
}
