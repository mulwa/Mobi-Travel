import { AuthenticationProvider } from './../../providers/authentication/authentication';
/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This File Represent Location Search Page Component
 * File path - '../../src/pages/location/location'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {

  // List of Locations
  locations: any = [];

  // New List of Locations
  // This new list will help us for search
  newLocationList: any = [];


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public loadingCtrl:LoadingController,
    public authProvider:AuthenticationProvider,
    public http: HttpClient) { }

  /** Do any initialization */
  ngOnInit() {
    this.getLocations();
  }

  /**
   * Get Location Data From this API- https://restcountries.eu/rest/v2/all
   */
  getLocations() {
    // this.http.get('https://restcountries.eu/rest/v2/all').subscribe(data => {
    //   this.locations = data;
    //   this.newLocationList = this.locations;
    // })
    let loader = this.loadingCtrl.create({
      content: "Please wait fetching Location..."      
    });
    loader.present().then(()=>{
      this.authProvider.getCitites().subscribe(cities =>{
        loader.dismiss();
        if(cities.response_code ==0){
          console.log(cities.cities)
          this.locations = cities.cities;
          this.newLocationList = this.locations;
        }else{
          this.locations  = null;
        }      
      },error =>{
        console.log(error);
        loader.dismiss();
      })

    })
    
  }

  /**
   * After Pick One Location From List, Dismiss This Current Modal
   * and Go Back to It's Parent Page.
   * 
   * @param location    Selected Location
   */
  chooseLocation(location) {
    this.viewCtrl.dismiss(location);
  }

  /**
   * Search Query
   * @param ev 
   */
  getItems(ev: any) {
    // Reset items back to all of the items
    this.locations = this.newLocationList;

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.locations = this.newLocationList.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  /**
   * Dismiss function
   * This function dismiss the popup modal
   */
  dismiss() {
    this.viewCtrl.dismiss();
  }
}

