import { NetworkProvider } from './../../providers/network/network';
import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { Component } from '@angular/core';
import {Network} from '@ionic-native/network';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  disconnectSubscription
  connectSubscription

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public network:Network,
    public networkProvider:NetworkProvider,
    public authProvider:AuthenticationProvider,
    public menuCtrl: MenuController) {
    this.menuCtrl.enable(true); // Enable SideMenu
  }
  ionViewDidLoad() {
    if(this.authProvider.isAuthenticated() != true){
      this.loadingSearchPage()      
    }
  }
  ionViewDidEnter(){
    this.networkProvider.checkOnConnectionStatus();
    this.networkProvider.checkOnDisconnectionStatus();    
  }
  ionViewWillLeave(){
    this.networkProvider.unSubscribeNetwork() 
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
  loadingSearchPage(){
    this.navCtrl.setRoot('SearchBusPage')
  }
}