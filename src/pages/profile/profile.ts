import { AuthenticationProvider } from './../../providers/authentication/authentication';
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
    public authProv:AuthenticationProvider,
    public navParams: NavParams) {
  }
  ionViewCanEnter(){
    if(this.authProv.isAuthenticated() == true){
      console.log("User Is Authenticated")      
    }else{
      console.log("user is not authenticated")
      this.authProv.showToast('Please Login first')
      
      this.navCtrl.setRoot('SignInPage')
     
    }

  }
  
}
