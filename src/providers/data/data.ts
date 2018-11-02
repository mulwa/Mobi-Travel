/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 * 
 * This file represents a provider of Data.
 * File path - '../../../src/providers/data/data'
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataProvider {

  constructor(public http: HttpClient) { }

  /**
   * ----------------------------------------------------
   * Side Menu Data
   * ----------------------------------------------------
   */
  getSideMenus() {
    return [
      {title: 'Buy Ticket', icon: 'book', component:'SearchBusPage'}, 
      { title: 'My Tickets', icon: 'search', component: 'SearchTicketPage' },     
      { title: 'My Profile', icon: 'md-person', component: 'ProfilePage' },      
      { title: 'Contact Us', icon: 'call', component: 'ContactUsPage' }, 
          
      
    ]
  }

  
  getDeals() {
    return [
      {
        name: 'Amboseli: 2-Day Trip',
        details: 'Visit Amboseli with sightseeing',
        price: '1200',
        image: 'assets/imgs/bus.png'
      }
    ]
  }
  /**
   * ----------------------------------------------------
   * Get List of Recommend Destination
   * ----------------------------------------------------
   */
  getRecommendDestination() {
    return [
      {
        country: 'Mombasa',
        image: 'assets/imgs/background/img8.jpeg',
        totalHotels: 890,
        avgPrice: 200
      }     
    ]
  }
  
}
