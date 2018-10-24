import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the NetworkErrorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-network-error',
  templateUrl: 'network-error.html',
})
export class NetworkErrorPage{

  constructor(public navCtrl: NavController,
      public viewCtrl: ViewController,
     public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad NetworkErrorPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
    
  }

}
