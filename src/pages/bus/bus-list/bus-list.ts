import { Price } from './../../../models/price';
import { BusProvider } from './../../../providers/bus/bus';
import { Bus } from './../../../models/bus';
import { AuthenticationProvider } from './../../../providers/authentication/authentication';


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, LoadingController } from 'ionic-angular';
import { DataProvider } from '../../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-bus-list',
  templateUrl: 'bus-list.html',
})
export class BusListPage {

  // Array List of Bus
  buses:Bus;

  departure_array;
  arrival_array;
  departure_time:string;
  departure_date:string;

  arrival_time:string;
  arrival_date:string;

  total_seats:number;
  seats_available:number;
  price:Price;

  

  


  traveldetails:any;
  from_id:number;
  to_id:number;
  travel_date:string;
  to_name:string;
  from_name:string;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private  authProvider: AuthenticationProvider,
    private busProvider:BusProvider,
    private loadingCtrl:LoadingController,
    public modalCtrl: ModalController,
    public dataProvider: DataProvider) {

      this.traveldetails = navParams.get('travelDetails');
      this.from_id  = this.traveldetails.from_id;
      this.to_id = this.traveldetails.to_id;
      this.travel_date= this.traveldetails.travel_date;
      this.to_name = this.traveldetails.to_name;
      this.from_name = this.traveldetails.from_name;
      


    

    this.getAllBuses();
  }

  
 
  getAllBuses(){
    let loader = this.loadingCtrl.create({
      content: "Please Wait..."      
    });
    loader.present().then(()=>{
      this.busProvider.getSchedule(this.from_id
        ,this.to_id,this.travel_date).subscribe(data =>{
          loader.dismiss();
          console.log(data.bus[0].destinations)
          
          if(data.response_code ==0){          
            this.buses = data.bus;
            console.log(this.buses)

            
            console.log(this.buses.departure_time)
            
            this.departure_array = this.buses[0].departure_time.split(",");
            this.arrival_array = this.buses[0].arrival_time.split(",");
            console.log(this.departure_array);
              
          }     
        
      },error =>{
        loader.dismiss();
        console.log(error)
      })

    })
   
    
  }

  /**
   * Open Details Page of Selected Bus
   */ 
  goToViewDetailsPage1(bus:Bus):void{    
    let busDetails =  {
      from_id: this.from_id,
      to_id:this.to_id,
      to_name: this.to_name,
      from_name: this.from_name,
      travel_date:this.travel_date,
      selected_vehicle:bus.id
    }
    this.modalCtrl.create('BusDetailsPage',{busDetails:busDetails}).present();
  }

  /**
   * Dismiss function
   * This function dismiss the popup modal
   */
  dismiss() {
    this.viewCtrl.dismiss();
  }
}

