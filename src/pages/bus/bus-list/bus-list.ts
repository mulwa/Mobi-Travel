import { NetworkProvider } from './../../../providers/network/network';
import { Price } from './../../../models/price';
import { BusProvider } from './../../../providers/bus/bus';
import { Bus } from './../../../models/bus';
import { AuthenticationProvider } from './../../../providers/authentication/authentication';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { DatePipe } from '@angular/common';


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, LoadingController, ToastController } from 'ionic-angular';
import { DataProvider } from '../../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-bus-list',
  templateUrl: 'bus-list.html',
  providers: [DatePipe],
  animations: [
    trigger('cardClick', [
      state('normal', style({
        opacity: '0.9',
        transform: 'scale(1.0)'
      })),
      state('clicked', style({
        opacity: '1.3',
        transform: 'scale(1.0)'
      })),
      transition('normal <=> clicked', animate('600ms linear'))
    ]),
    // end cardClick Trigger
    trigger('No-vehicle-state', [
      state('void', style({
        transform: 'translateX(-100%)'
      })),
      transition('void => *', animate('500ms ease-out'))
    ])

  ]
})
export class BusListPage {
  cardClickState: string = 'normal'


  // Array List of Bus
  buses: Bus[] = [];

  departure_array;
  arrival_array;
  departure_time: string;
  departure_date: string;

  arrival_time: string;
  arrival_date: string;

  total_seats: number;
  seats_available: number;
  price: Price;
  currentDate: any = Date.now();
  currentTime: any;



  traveldetails: any;
  from_id: number;
  to_id: number;
  travel_date: string;
  to_name: string;
  from_name: string;

  public noofVehiclesFound: number;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private authProvider: AuthenticationProvider,
    private toastCtrl: ToastController,
    private busProvider: BusProvider,
    private loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public networkProvider: NetworkProvider,
    private datePipe: DatePipe,
    public dataProvider: DataProvider) {

    this.traveldetails = navParams.get('travelDetails');
    console.log('from bus list page' + JSON.stringify(this.traveldetails));
    this.from_id = this.traveldetails.from_id;
    this.to_id = this.traveldetails.to_id;
    this.travel_date = this.traveldetails.travel_date;
    this.to_name = this.traveldetails.to_name;
    this.from_name = this.traveldetails.from_name;

    this.currentTime = new Date();
    this.currentTime = this.datePipe.transform(this.currentTime, 'H:m');
    this.currentDate = this.datePipe.transform(this.currentDate, 'dd-MM-yyyy');

    this.getAllBuses();
  }
  ionViewDidEnter() {
    this.networkProvider.checkOnConnectionStatus()
    this.networkProvider.checkOnDisconnectionStatus()
  }
  ionViewWillLeave() {
    this.networkProvider.unSubscribeNetwork()
  }

  getAllBuses() {
    let loader = this.loadingCtrl.create({
      content: "Please Wait..."
    });
    loader.present().then(() => {
      this.busProvider.getSchedule(this.from_id
        , this.to_id, this.travel_date).subscribe(data => {
          loader.dismiss();

          if (data.response_code == 0) {
            this.noofVehiclesFound = Object.keys(data.bus).length;

            if (this.noofVehiclesFound > 0) {
              // console.log(this.buses.departure_time) 
              // this.buses = data.bus; 


              this.departure_array = data.bus[0].departure_time.split(",");
              this.arrival_array = data.bus[0].arrival_time.split(",");
              data.bus.forEach((x) => {
                let deptureTime = x.departure_time.split(',')[1];
                console.log(x.route +'Time Difference' + this.calculateTimeDiff(this.currentTime, deptureTime))
                if (parseInt(deptureTime) != parseInt('00:00') && this.calculateTimeDiff(this.currentTime, deptureTime) < 1) {
                  this.buses.push(x)
                }
              }) //end foreach

            } else {
              this.showToast(`There are No Available Vehicles For the Selected Route`)
            }

          }

        }, error => {
          loader.dismiss();
          console.log(error)
        })

    })

  }
  showToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 6000,
      position: 'bottom'
    });
    toast.present();
  }
  calculateTimeDiff(cTime, departureTime) {
    let hours;
    if (this.currentDate == this.travel_date) {
      departureTime = departureTime.split(":");
      cTime = cTime.split(":");
      var startDate = new Date(0, 0, 0, departureTime[0], departureTime[1], 0);
      var endDate = new Date(0, 0, 0, cTime[0], cTime[1], 0);
      var diff = endDate.getTime() - startDate.getTime();

      hours = Math.floor(diff / 1000 / 60 / 60);
      diff -= hours * 1000 * 60 * 60;
      var minutes = Math.floor(diff / 1000 / 60);
      return hours;

    } else {
      return 0;
    }
  }


  /**
   * Open Details Page of Selected Bus
   */
  goToViewDetailsPage(bus: Bus): void {
    // let price = 10;
    
    let price = bus.price[0].fare_per_ticket;  
     

    this.cardClickState = 'clicked';
    let busDetails = {
      selected_bus_name: bus.route,
      from_id: this.from_id,
      to_id: this.to_id,
      to_name: this.to_name,
      from_name: this.from_name,
      travel_date: this.travel_date,
      selected_vehicle: bus.id,
      ticketPrice: price
    }
    console.log('from go to view Details page' + JSON.stringify(busDetails))
    this.modalCtrl.create('BusDetailsPage', { busDetails: busDetails }).present();
  }

  /**
   * Dismiss function
   * This function dismiss the popup modal
   */
  dismiss() {
    this.viewCtrl.dismiss();
  }
}

