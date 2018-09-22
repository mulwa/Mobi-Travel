/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This File Represent Contact Us Component
 * File path - '../../src/pages/contact-us/contact-us'
 */

import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var google;

@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  // Contact Information
  contactInfos = {
    email: 'themebucketbd@gmail.com',
    phone: '000 000 000',
    whatsapp: '000 000 000',
    address: '135 Howard St, American Falls, ID, 83211'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /**
   * Lifecycle hook that is called after a component's view has been fully initialized.
   */
  ngAfterViewInit() {
    this.loadmap();
  }

  /**
   * --------------------------------------------------------------
   * Load Google Map
   * --------------------------------------------------------------
   */
  loadmap() {

    // Set any Latitude and Longitude
    const latlng = new google.maps.LatLng(49.2882266, -123.1180008);

    // Map Styles
    const mapStyle = [
      {
        featureType: "all",
        stylers: [
          { hue: "#0000ff" },
          { saturation: -75 }
        ]
      },
      {
        featureType: "poi",
        elementType: "label",
        stylers: [
          { visibility: "off" }
        ]
      }
    ];

    // Map Options
    let mapOptions = {
      center: latlng,
      zoom: 15,
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
      },
      navigationControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: mapStyle
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    // Set Map in Center
    this.map.setCenter(latlng);

    // Call Marker Method
    this.addMarker();
  }

  /**
   * --------------------------------------------------------------
   * Map Marker
   * --------------------------------------------------------------
   */
  addMarker() {

    // Marker Options
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    // Content of Marker
    let content = "<h4>Hello!</h4>";

    // Call Marker Info Window
    this.addInfoWindow(marker, content);
  }

  /**
   * --------------------------------------------------------------
   * Map Marker Info Window
   * --------------------------------------------------------------
   */
  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }
}
