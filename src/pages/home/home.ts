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
    public authProvider:AuthenticationProvider,
    public menuCtrl: MenuController) {
    this.menuCtrl.enable(true); // Enable SideMenu
  }
  ionViewDidLoad() {
    if(this.authProvider.isAuthenticated() != true){
      this.loadingSearchPage()
      this.checkOnConnectionStatus();
      this.checkOnDisconnectionStatus();
    }
  }
  ionViewDidEnter(){
    this.checkOnConnectionStatus();
    this.checkOnDisconnectionStatus();
  }
  ionViewWillLeave(){
    this.connectSubscription.unsubscribe()
    this.disconnectSubscription.unsubscribe()

  }

  /**
   * Open Search Page
   */
  checkOnDisconnectionStatus(){    
    this.disconnectSubscription = this.network.onDisconnect().subscribe((data) =>{
      console.log('You have no internet connection'+data)
      this.authProvider.showToast('You Are Now Offline')
    }, error =>{
      console.log('an Error has occured on OnDisconnect Method'+error)
    })

  }
  checkOnConnectionStatus(){
    this.connectSubscription = this.network.onConnect().subscribe((data)=>{
      console.log(data)
      // console.log('You have Intenet connection: '+this.network.type)
      this.authProvider.showToast('You are No Online'+data.type)
    }, error =>{
      console.log('an error has occured on Onconnect Method')
    })

  }
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