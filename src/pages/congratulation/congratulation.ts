/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This File Represent Congratulation Page Component
 * File path - '../../src/pages/congratulation/congratulation'
 */

import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-congratulation',
  templateUrl: 'congratulation.html',
})
export class CongratulationPage {
  navDetails:any;
  from:any;
  message:any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public appCtrl: App) {
      this.navDetails =  navParams.get('data');
      this.message = this.navDetails.message;
      this.from = this.navDetails.from;

     }
    

  /***
   * --------------------------------------------------------------
   * Dismiss Modal
   * --------------------------------------------------------------
   * @method    dismiss
   */
  goHome() {
    // this.viewCtrl.dismiss();
    this.navCtrl.setRoot('HomePage');
    
  }
  

}
