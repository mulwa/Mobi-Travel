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
      {
        title: 'Home', icon: 'home', component: 'HomePage'
      },
      {
        title: 'Search', icon: 'search',
        subPages: [{
          title: 'Train',
          icon: 'fa fa-train',
          component: 'SearchCarPage',
        }, {
          title: 'Bus',
          icon: 'fa fa-bus',
          component: 'SearchBusPage',
        }]
      },      
      { title: 'Profile', icon: 'md-person', component: 'ProfilePage' },
      // { title: 'Bus Formats', icon: 'bookmark', component: 'AboutUsPage' },
      { title: 'Contact Us', icon: 'call', component: 'ContactUsPage' }, 
      { title: 'My Tickets', icon: 'book', component: 'SearchTicketPage' },    
      { title: 'Settings', icon: 'ios-settings', component: 'SettingsPage' }
    ]
  }

  /**
   * ----------------------------------------------------
   * Get List of Flights
   * ----------------------------------------------------
   */
  getFlightList() {
    return [
      {
        airlinesName: 'Turkish Airlines',
        departureTime: '6:15 am',
        returnTime: '7:25 pm',
        date: new Date(),
        from: 'DAC',
        to: 'IAD',
        totalHour: '23h 10m',
        price: '1472'
      },
      {
        airlinesName: 'Qatar Airways',
        departureTime: '3:00 am',
        returnTime: '3:25 pm',
        date: new Date(),
        from: 'DAC',
        to: 'IAD',
        totalHour: '22h 35m',
        price: '1511'
      },
      {
        airlinesName: 'Turkish Airlines',
        departureTime: '6:15 am',
        returnTime: '7:25 pm',
        date: new Date(),
        from: 'DAC',
        to: 'IAD',
        totalHour: '23h 10m',
        price: '1472'
      },
      {
        airlinesName: 'Qatar Airways',
        departureTime: '3:00 am',
        returnTime: '3:25 pm',
        date: new Date(),
        from: 'DAC',
        to: 'IAD',
        totalHour: '22h 35m',
        price: '1511'
      },
      {
        airlinesName: 'Turkish Airlines',
        departureTime: '6:15 am',
        returnTime: '7:25 pm',
        date: new Date(),
        from: 'DAC',
        to: 'IAD',
        totalHour: '23h 10m',
        price: '1472'
      },
      {
        airlinesName: 'Qatar Airways',
        departureTime: '3:00 am',
        returnTime: '3:25 pm',
        date: new Date(),
        from: 'DAC',
        to: 'IAD',
        totalHour: '22h 35m',
        price: '1511'
      },
      {
        airlinesName: 'Turkish Airlines',
        departureTime: '6:15 am',
        returnTime: '7:25 pm',
        date: new Date(),
        from: 'DAC',
        to: 'IAD',
        totalHour: '23h 10m',
        price: '1472'
      }
    ];
  }

  /**
   * ----------------------------------------------------
   * Get List of Hotels
   * ----------------------------------------------------
   */
  getHotels() {
    return [
      {
        name: 'Four Seasons Hotel Toronto',
        image: [
          'assets/imgs/background/img6.jpeg',
          'assets/imgs/background/img8.jpeg',
          'assets/imgs/background/img9.jpeg'
        ],
        star: 4.7,
        totalReviews: 1080,
        type: '5-star',
        address: 'Four Seasons Hotel Toronto',
        website: 'fourseasons.com',
        phone: '+1 416-964-0411',
        price: '1200',
        overview: 'Upscale rooms, some with harbour views, plus a day spa & Mediterranean dining.',
        details: `<p>In the fashionable Yorkville shopping and restaurant quarter, this high-rise, luxe property is a 9-minute walk from Royal Ontario Museum.</p>
        <p>The sophisticated rooms feature neutral tones and floor-to-ceiling windows, plus free Wi-Fi and flat-screen TVs. Tea and coffeemaking facilities,
        24-hour room service, minibars and iPod docks are also provided. Suites add pull-out sofas and separate living/dining areas; some have kitchens.</p>
        <p>The hotel has a chic restaurant, plus a vibrant cocktail bar with a terrace. There's also a luxe spa with an indoor pool and a whirlpool tub, plus 
        a fitness centre, event space and a 24-hour business centre.</p>`,
        amenities: [
          {
            icon: 'fa fa-car',
            name: 'Free parking'
          },
          {
            icon: 'fa fa-coffee',
            name: 'Free breakfast'
          }, {
            icon: 'fa fa-snowflake-o',
            name: 'Air-conditioned'
          },
          {
            icon: 'fa fa-plug',
            name: 'Laundry service'
          },
          {
            icon: 'fa fa-building',
            name: 'Business center'
          },
          {
            icon: 'fa fa-window-restore',
            name: 'Room service'
          },
          {
            icon: 'fa fa-child',
            name: 'Kid-friendly'
          }]
      },
      {
        name: 'The Magnolia Hotel & Spa',
        image: [
          'assets/imgs/background/img8.jpeg',
          'assets/imgs/background/img6.jpeg',
          'assets/imgs/background/img9.jpeg'
        ],
        star: 4.7,
        totalReviews: 1080,
        type: '5-star',
        address: '623 Courtney Street, Victoria, BC V8W 1B8, Canada',
        website: 'magnoliahotel.com',
        phone: '+1 250-381-0999',
        price: '900',
        overview: 'Upscale rooms, some with harbour views, plus a day spa & Mediterranean dining.',
        details: `<p>In the fashionable Yorkville shopping and restaurant quarter, this high-rise, luxe property is a 9-minute walk from Royal Ontario Museum.</p>
        <p>The sophisticated rooms feature neutral tones and floor-to-ceiling windows, plus free Wi-Fi and flat-screen TVs. Tea and coffeemaking facilities,
        24-hour room service, minibars and iPod docks are also provided. Suites add pull-out sofas and separate living/dining areas; some have kitchens.</p>
        <p>The hotel has a chic restaurant, plus a vibrant cocktail bar with a terrace. There's also a luxe spa with an indoor pool and a whirlpool tub, plus 
        a fitness centre, event space and a 24-hour business centre.</p>`,
        amenities: [
          {
            icon: 'fa fa-car',
            name: 'Free parking'
          },
          {
            icon: 'fa fa-coffee',
            name: 'Free breakfast'
          }, {
            icon: 'fa fa-snowflake-o',
            name: 'Air-conditioned'
          },
          {
            icon: 'fa fa-plug',
            name: 'Laundry service'
          },
          {
            icon: 'fa fa-building',
            name: 'Business center'
          },
          {
            icon: 'fa fa-window-restore',
            name: 'Room service'
          },
          {
            icon: 'fa fa-child',
            name: 'Kid-friendly'
          }]
      },
      {
        name: 'Marriott on the Falls',
        image: [
          'assets/imgs/background/img9.jpeg',
          'assets/imgs/background/img6.jpeg',
          'assets/imgs/background/img8.jpeg'
        ],
        star: 4.7,
        totalReviews: 1080,
        type: '5-star',
        address: '6755 Fallsview Blvd, Niagara Falls, ON L2G 3W7, Canada',
        website: 'marriottonthefalls.com',
        phone: '+1 416-964-0411',
        price: '1200',
        overview: 'Upscale rooms, some with harbour views, plus a day spa & Mediterranean dining.',
        details: `<p>In the fashionable Yorkville shopping and restaurant quarter, this high-rise, luxe property is a 9-minute walk from Royal Ontario Museum.</p>
        <p>The sophisticated rooms feature neutral tones and floor-to-ceiling windows, plus free Wi-Fi and flat-screen TVs. Tea and coffeemaking facilities,
        24-hour room service, minibars and iPod docks are also provided. Suites add pull-out sofas and separate living/dining areas; some have kitchens.</p>
        <p>The hotel has a chic restaurant, plus a vibrant cocktail bar with a terrace. There's also a luxe spa with an indoor pool and a whirlpool tub, plus 
        a fitness centre, event space and a 24-hour business centre.</p>`,
        amenities: [
          {
            icon: 'fa fa-car',
            name: 'Free parking'
          },
          {
            icon: 'fa fa-coffee',
            name: 'Free breakfast'
          }, {
            icon: 'fa fa-snowflake-o',
            name: 'Air-conditioned'
          },
          {
            icon: 'fa fa-plug',
            name: 'Laundry service'
          },
          {
            icon: 'fa fa-building',
            name: 'Business center'
          },
          {
            icon: 'fa fa-window-restore',
            name: 'Room service'
          },
          {
            icon: 'fa fa-child',
            name: 'Kid-friendly'
          }]
      },
      {
        name: 'Best Western Oasis Inn',
        image: [
          'assets/imgs/background/img6.jpeg',
          'assets/imgs/background/img8.jpeg',
          'assets/imgs/background/img9.jpeg'
        ],
        star: 4.7,
        totalReviews: 1080,
        type: '5-star',
        address: '303 S 2nd St, Canadian, TX 79014, USA',
        website: 'bestwestern.com',
        phone: '+1 416-964-0411',
        price: '1200',
        overview: 'Upscale rooms, some with harbour views, plus a day spa & Mediterranean dining.',
        details: `<p>In the fashionable Yorkville shopping and restaurant quarter, this high-rise, luxe property is a 9-minute walk from Royal Ontario Museum.</p>
        <p>The sophisticated rooms feature neutral tones and floor-to-ceiling windows, plus free Wi-Fi and flat-screen TVs. Tea and coffeemaking facilities,
        24-hour room service, minibars and iPod docks are also provided. Suites add pull-out sofas and separate living/dining areas; some have kitchens.</p>
        <p>The hotel has a chic restaurant, plus a vibrant cocktail bar with a terrace. There's also a luxe spa with an indoor pool and a whirlpool tub, plus 
        a fitness centre, event space and a 24-hour business centre.</p>`,
        amenities: [
          {
            icon: 'fa fa-car',
            name: 'Free parking'
          },
          {
            icon: 'fa fa-coffee',
            name: 'Free breakfast'
          }, {
            icon: 'fa fa-snowflake-o',
            name: 'Air-conditioned'
          },
          {
            icon: 'fa fa-plug',
            name: 'Laundry service'
          },
          {
            icon: 'fa fa-building',
            name: 'Business center'
          },
          {
            icon: 'fa fa-window-restore',
            name: 'Room service'
          },
          {
            icon: 'fa fa-child',
            name: 'Kid-friendly'
          }]
      },
      {
        name: 'Pan Pacific Hotel Vancouver',
        image: [
          'assets/imgs/background/img8.jpeg',
          'assets/imgs/background/img6.jpeg',
          'assets/imgs/background/img9.jpeg'
        ],
        star: 4.7,
        totalReviews: 1080,
        type: '5-star',
        address: '300 - 999 Canada Place, Vancouver, BC V6C 3B5, Canada',
        website: 'bestwestern.com',
        phone: '+1 416-964-0411',
        price: '1200',
        overview: 'Upscale rooms, some with harbour views, plus a day spa & Mediterranean dining.',
        details: `<p>In the fashionable Yorkville shopping and restaurant quarter, this high-rise, luxe property is a 9-minute walk from Royal Ontario Museum.</p>
        <p>The sophisticated rooms feature neutral tones and floor-to-ceiling windows, plus free Wi-Fi and flat-screen TVs. Tea and coffeemaking facilities,
        24-hour room service, minibars and iPod docks are also provided. Suites add pull-out sofas and separate living/dining areas; some have kitchens.</p>
        <p>The hotel has a chic restaurant, plus a vibrant cocktail bar with a terrace. There's also a luxe spa with an indoor pool and a whirlpool tub, plus 
        a fitness centre, event space and a 24-hour business centre.</p>`,
        amenities: [
          {
            icon: 'fa fa-car',
            name: 'Free parking'
          },
          {
            icon: 'fa fa-coffee',
            name: 'Free breakfast'
          }, {
            icon: 'fa fa-snowflake-o',
            name: 'Air-conditioned'
          },
          {
            icon: 'fa fa-plug',
            name: 'Laundry service'
          },
          {
            icon: 'fa fa-building',
            name: 'Business center'
          },
          {
            icon: 'fa fa-window-restore',
            name: 'Room service'
          },
          {
            icon: 'fa fa-child',
            name: 'Kid-friendly'
          }]
      }
    ]
  }

  /**
   * ----------------------------------------------------
   * Get List of Cars
   * ----------------------------------------------------
   */
  getCarList() {
    return [
      {
        name: 'Audi A4',
        image: 'assets/imgs/cars/car1.png',
        price: '400',
        carType: 'Economy',
        seats: 4,
        doorCount: 4,
        driverAge: 25,
        transmission: 'Automatic',
        isAirConditioned: 'Yes',
        isUnlimitedMileage: 'Yes'
      },
      {
        name: 'Peugeot',
        image: 'assets/imgs/cars/car2.png',
        price: '391.94',
        carType: 'Compact',
        seats: 4,
        doorCount: 4,
        driverAge: 25,
        transmission: 'Automatic',
        isAirConditioned: 'Yes',
        isUnlimitedMileage: 'Yes'
      },
      {
        name: 'BMW E89',
        image: 'assets/imgs/cars/car3.png',
        price: '391.94',
        carType: 'Mid-size',
        seats: 4,
        doorCount: 4,
        driverAge: 25,
        transmission: 'Automatic',
        isAirConditioned: 'Yes',
        isUnlimitedMileage: 'Yes'
      },
      {
        name: 'BMW M5',
        image: 'assets/imgs/cars/car4.png',
        price: '450.94',
        carType: 'Compact',
        seats: 4,
        doorCount: 4,
        driverAge: 25,
        transmission: 'Automatic',
        isAirConditioned: 'Yes',
        isUnlimitedMileage: 'Yes'
      },
      {
        name: 'Yellow Ferrari',
        image: 'assets/imgs/cars/car2.png',
        price: '300.94',
        carType: 'Economy',
        seats: 4,
        doorCount: 4,
        driverAge: 25,
        transmission: 'Automatic',
        isAirConditioned: 'Yes',
        isUnlimitedMileage: 'Yes'
      },
      {
        name: 'Hyundai Accent',
        image: 'assets/imgs/cars/car3.png',
        price: '250',
        carType: 'Compact',
        seats: 4,
        doorCount: 4,
        driverAge: 25,
        transmission: 'Automatic',
        isAirConditioned: 'Yes',
        isUnlimitedMileage: 'Yes'
      },
      {
        name: 'Audi A4',
        image: 'assets/imgs/cars/car1.png',
        price: '400.20',
        carType: 'Mid-size',
        seats: 4,
        doorCount: 4,
        driverAge: 25,
        transmission: 'Automatic',
        isAirConditioned: 'Yes',
        isUnlimitedMileage: 'Yes'
      },
      {
        name: 'BMW M5',
        image: 'assets/imgs/cars/car4.png',
        price: '100.30',
        carType: 'Compact',
        seats: 4,
        doorCount: 4,
        driverAge: 25,
        transmission: 'Automatic',
        isAirConditioned: 'Yes',
        isUnlimitedMileage: 'Yes'
      },
      {
        name: 'Audi A4',
        image: 'assets/imgs/cars/car1.png',
        price: '200.94',
        carType: 'Economy',
        seats: 4,
        doorCount: 4,
        driverAge: 25,
        transmission: 'Automatic',
        isAirConditioned: 'Yes',
        isUnlimitedMileage: 'Yes'
      },
      {
        name: 'Yellow Ferrari',
        image: 'assets/imgs/cars/car2.png',
        price: '391.94',
        carType: 'Compact',
        seats: 5,
        doorCount: 4,
        driverAge: 26,
        transmission: 'Automatic',
        isAirConditioned: 'Yes',
        isUnlimitedMileage: 'Yes'
      }
    ]
  }

  /**
   * ----------------------------------------------------
   * Get List of Bus
   * ----------------------------------------------------
   */
  getBusList() {
    return [
      {
        name: 'Articulated Bus',
        type: 'Single deck',
        price: '400',
        startTime: '7:00 am',
        stopTime: '3:30 pm',
        totalHour: '8h 30m',
        from: 'Canada',
        to: 'Germany'
      },
      {
        name: 'Atlantean',
        type: 'Double deck',
        price: '400',
        startTime: '7:00 am',
        stopTime: '3:30 pm',
        totalHour: '8h 30m',
        from: 'Canada',
        to: 'Germany'
      },
      {
        name: 'Axcess-Ultralow',
        type: 'Executive',
        price: '400',
        startTime: '7:00 am',
        stopTime: '3:30 pm',
        totalHour: '8h 30m',
        from: 'Canada',
        to: 'Germany'
      },
      {
        name: 'Centroliner',
        type: 'Single deck',
        price: '400',
        startTime: '7:00 am',
        stopTime: '3:30 pm',
        totalHour: '8h 30m',
        from: 'Canada',
        to: 'Germany'
      },
      {
        name: 'Century',
        type: 'Executive',
        price: '400',
        startTime: '7:00 am',
        stopTime: '3:30 pm',
        totalHour: '8h 30m',
        from: 'Canada',
        to: 'Germany'
      },
      {
        name: 'CityPacer',
        type: 'Single deck',
        price: '400',
        startTime: '7:00 am',
        stopTime: '3:30 pm',
        totalHour: '8h 30m',
        from: 'Canada',
        to: 'Germany'
      },
      {
        name: 'Articulated Bus',
        type: 'Double deck',
        price: '400',
        startTime: '7:00 am',
        stopTime: '3:30 pm',
        totalHour: '8h 30m',
        from: 'Canada',
        to: 'Germany'
      }
    ]
  }

  /**
   * ----------------------------------------------------
   * Get List of Trains
   * ----------------------------------------------------
   */
  getTrainList() {
    return [
      {
        name: 'Ciremal',
        type: 'Executive(A)',
        price: '90',
        startTime: '7:00 am',
        stopTime: '3:30 pm',
        totalHour: '8h 30m',
        from: 'Canada',
        to: 'Germany'
      },
      {
        name: 'Harina',
        type: 'Economy(c)',
        price: '100.10',
        startTime: '7:00 am',
        stopTime: '3:30 pm',
        totalHour: '8h 30m',
        from: 'Canada',
        to: 'Germany'
      },
      {
        name: 'Connecting Trains',
        type: 'Executive(A)',
        price: '80.30',
        startTime: '7:00 am',
        stopTime: '3:30 pm',
        totalHour: '8h 30m',
        from: 'Canada',
        to: 'Germany'
      },
      {
        name: 'Ciremal',
        type: 'Economy(c)',
        price: '100',
        startTime: '7:00 am',
        stopTime: '3:30 pm',
        totalHour: '8h 30m',
        from: 'Canada',
        to: 'Germany'
      },
      {
        name: 'Harina',
        type: 'Economy(c)',
        price: '70.90',
        startTime: '7:00 am',
        stopTime: '3:30 pm',
        totalHour: '8h 30m',
        from: 'Canada',
        to: 'Germany'
      },
      {
        name: 'Ciremal',
        type: 'Economy(c)',
        price: '90.45',
        startTime: '7:00 am',
        stopTime: '3:30 pm',
        totalHour: '8h 30m',
        from: 'Canada',
        to: 'Germany'
      }
    ]
  }

  /**
   * ----------------------------------------------------
   * Get List of Cruise
   * ----------------------------------------------------
   */
  getCruiseList() {
    return [
      {
        boatName: 'Celebrity Silhouette ',
        subname: '13 Night Trade Winds Transatlantic',
        startDate: 'Sun Apr 15',
        stopDate: 'Sat Apr 28',
        duration: '13 nights',
        image: 'assets/imgs/cruise/cruise1.jpeg',
        title: 'Itinerary',
        destination: 'Fort Lauderdale - Florida',
        price: '1123'
      },
      {
        boatName: 'Celebrity Silhouette ',
        subname: '7 Night Eastern Caribbean',
        startDate: 'Sun Apr 8',
        stopDate: 'Sat Apr 15',
        duration: '7 nights',
        image: 'assets/imgs/cruise/cruise2.jpeg',
        title: 'Itinerary',
        destination: 'Ft. Lauderdale',
        price: '774'
      },
      {
        boatName: 'Celebrity Silhouette ',
        subname: '7 Night Eastern Caribbean',
        startDate: 'Sun Apr 8',
        stopDate: 'Sat Apr 15',
        duration: '5 nights',
        image: 'assets/imgs/cruise/cruise3.jpeg',
        title: 'Itinerary',
        destination: 'Ft. Lauderdale',
        price: '900'
      },
      {
        boatName: 'Celebrity Silhouette ',
        subname: '7 Night Eastern Caribbean',
        startDate: 'Sun Apr 8',
        stopDate: 'Sat Apr 15',
        duration: '10 nights',
        image: 'assets/imgs/cruise/cruise4.jpeg',
        title: 'Itinerary',
        destination: 'Ft. Lauderdale',
        price: '600'
      },
      {
        boatName: 'Celebrity Silhouette ',
        subname: '7 Night Eastern Caribbean',
        startDate: 'Sun Apr 8',
        stopDate: 'Sat Apr 15',
        duration: '12 nights',
        image: 'assets/imgs/cruise/cruise1.jpeg',
        title: 'Itinerary',
        destination: 'Ft. Lauderdale',
        price: '876'
      },
      {
        boatName: 'Celebrity Silhouette ',
        subname: '7 Night Eastern Caribbean',
        startDate: 'Sun Apr 8',
        stopDate: 'Sat Apr 15',
        duration: '21 nights',
        image: 'assets/imgs/cruise/cruise2.jpeg',
        title: 'Itinerary',
        destination: 'Ft. Lauderdale',
        price: '1123'
      },
      {
        boatName: 'Celebrity Silhouette ',
        subname: '7 Night Eastern Caribbean',
        startDate: 'Sun Apr 8',
        stopDate: 'Sat Apr 15',
        duration: '7 nights',
        image: 'assets/imgs/cruise/cruise3.jpeg',
        title: 'Itinerary',
        destination: 'Ft. Lauderdale',
        price: '888'
      }
    ]
  }


  /**
   * ----------------------------------------------------
   * Get List of Activities
   * ----------------------------------------------------
   */
  getActivities() {
    return [
      {
        name: 'Georgia Aquarium Admission',
        from: 'Atlanta',
        startDate: 'Sun Apr 8',
        stopDate: 'Sat Apr 15',
        duration: '7 nights',
        price: '1500',
        image: 'assets/imgs/activities/activity1.jpeg'
      },
      {
        name: 'Zoo Atlanta Admission',
        from: 'Atlanta',
        startDate: 'Sun Apr 8',
        stopDate: 'Sat Apr 15',
        duration: '7 nights',
        price: '1500',
        image: 'assets/imgs/activities/activity2.jpeg'
      },
      {
        name: 'Urban Adventure Quest- Atlanta',
        from: 'Atlanta',
        startDate: 'Sun Apr 8',
        stopDate: 'Sat Apr 15',
        duration: '7 nights',
        price: '1500',
        image: 'assets/imgs/activities/activity3.jpeg'
      },
      {
        name: 'Millennium Gate Museum',
        from: 'Atlanta',
        startDate: 'Sun Apr 8',
        stopDate: 'Sat Apr 15',
        duration: '7 nights',
        price: '1500',
        image: 'assets/imgs/activities/activity4.jpeg'
      },
      {
        name: 'Georgia Aquarium Admission',
        from: 'Atlanta',
        startDate: 'Sun Apr 8',
        stopDate: 'Sat Apr 15',
        duration: '7 nights',
        price: '1500',
        image: 'assets/imgs/activities/activity5.jpeg'
      },
      {
        name: 'Zoo Atlanta Admission',
        from: 'Atlanta',
        startDate: 'Sun Apr 8',
        stopDate: 'Sat Apr 15',
        duration: '7 nights',
        price: '1500',
        image: 'assets/imgs/activities/activity2.jpeg'
      },
      {
        name: 'Georgia Aquarium Admission',
        from: 'Atlanta',
        startDate: 'Sun Apr 8',
        stopDate: 'Sat Apr 15',
        duration: '7 nights',
        price: '1500',
        image: 'assets/imgs/activities/activity1.jpeg'
      }
    ]
  }

  /**
   * ----------------------------------------------------
   * Get List of Deals
   * ----------------------------------------------------
   */
  getDeals() {
    return [
      {
        name: 'Amboseli: 2-Day Trip',
        details: 'Visit Amboseli with sightseeing',
        price: '1200',
        image: 'assets/imgs/bus.png'
      },
      {
        name: 'Tsavo: 5-Day Trip',
        details: 'Visit Tsavo National, sightseeing tours',
        price: '1000',
        image: 'assets/imgs/shuttle.png'
      },
      {
        name: ': 15-Day Trip to Game pack of Your choice',
        details: 'Visit Game Pack of your Choice, Queenstown',
        price: '900',
        image: 'assets/imgs/bus.png'
      },
      {
        name: 'Japan: 6-Day Trip',
        details: 'Visit Japan, Queenstown',
        price: '900',
        image: 'assets/imgs/background/img8.jpeg'
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
      },
      {
        country: 'Naivasha',
        image: 'assets/imgs/background/img7.jpeg',
        totalHotels: 900,
        avgPrice: 110
      },
      {
        country: 'Amboseli',
        image: 'assets/imgs/background/img5.jpeg',
        totalHotels: 690,
        avgPrice: 80
      },
      {
        country: 'Nakuru',
        image: 'assets/imgs/background/img9.jpeg',
        totalHotels: 767,
        avgPrice: 130
      }
    ]
  }
  fakeTransansaction(){
    return [
      {
        username:"rWIv7GWzSp",
        api_key:"831b238c5cd73308520e38bbc6c1774f470a89e96d07a5bb6bcac3b86456f889",
        action:"ReserveSeats",
        from_city:"1",
        to_city:"2",
        travel_date:"05-10-2018",
        hash:"1FBEAD9B-D9CD-400D-ADF3-F4D0E639CEE0",
        selected_vehicle:"13",
        seater:"11",
        selected_seat:"3",
        selected_ticket_type:"13",
        payment_method:"2",
        phone_number:"0707200314",
        id_number:"",
        passenger_name:"christopher mulwa",
        email_address:"mulwa@gmail.com",
        insurance_charge:"0",
        served_by:"Ionic App",
        amount_charged:"",
        reference_number:""
      },
      {
        username:"rWIv7GWzSp",
        api_key:"831b238c5cd73308520e38bbc6c1774f470a89e96d07a5bb6bcac3b86456f889",
        action:"ReserveSeats",
        from_city:"1",
        to_city:"2",
        travel_date:"05-10-2018",
        hash:"1FBEAD9B-D9CD-400D-ADF3-F4D0E639CEE0",
        selected_vehicle:"13",
        seater:"11",
        selected_seat:"3",
        selected_ticket_type:"13",
        payment_method:"2",
        phone_number:"0707200314",
        id_number:"",
        passenger_name:"christopher mulwa",
        email_address:"mulwa@gmail.com",
        insurance_charge:"0",
        served_by:"Ionic App",
        amount_charged:"",
        reference_number:""
      }
    ]
  }
}
