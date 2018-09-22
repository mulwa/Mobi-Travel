/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This File Represent Location Map Page Component
 * File path - '../../src/pages/location-map/location-map'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
declare var google: any;

@IonicPage()
@Component({
  selector: 'page-location-map',
  templateUrl: 'location-map.html',
})
export class LocationMapPage {

  map: any;
  geocoder: any;
  address: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform) {
    // Get Hotel Address
    this.address = this.navParams.get('address');
  }

  /**
   * Lifecycle hook that is called after a component's view has been fully initialized.
   */
  ngAfterViewInit() {
    this.platform.ready().then(() => {
      this.loadMap();
    });
  }

  /**
   * --------------------------------------------------------------
   * Load Google Map
   * --------------------------------------------------------------
   */
  loadMap() {

    this.geocoder = new google.maps.Geocoder();

    // Convert Hotel Address into Geographic Coordinates(Latitude and Longitude)
    this.geocoder.geocode({
      'address': this.address
    }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {

        // Hotel Latitude
        const latitude = results[0].geometry.location.lat();

        // Hotel Longitude
        const longitude = results[0].geometry.location.lng();

        // Set Latitude and Longitude
        const latlng = new google.maps.LatLng(latitude, longitude);

        // Map Options
        const mapOptions = {
          zoom: 17,
          center: latlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        // Set Map in Center
        this.map.setCenter(latlng);

        // Create Marker
        const marker = new google.maps.Marker({
          map: this.map,
          position: latlng
        });

        // Marker Infor Window
        const infoWindow = new google.maps.InfoWindow({
          content: results[0].formatted_address
        });

        google.maps.event.addListener(marker, 'click', function () {
          infoWindow.open(this.map, marker);
        });
      }
    });
  }
}
