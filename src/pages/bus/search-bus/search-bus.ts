import { Dates } from './../../../models/date';
import { AuthenticationProvider } from './../../../providers/authentication/authentication';


import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Search } from '../../../models/search';


@IonicPage()
@Component({
  selector: 'page-search-bus',
  templateUrl: 'search-bus.html',
})
export class SearchBusPage implements OnInit {  

  searchObjects: Search = new Search();  
  from_id:number;
  to_id:number;
  from_name:string;
  to_name:string;
  travel_date:any;
  travel_dates:Dates[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams, 
    private authProvider: AuthenticationProvider,   
    public modalCtrl: ModalController) {
    this.searchObjects.tripType = 'oneWay'; // Default Trip Type
  }
  ngOnInit(): void { 
    this.getTravelDates();   
  }
  initForm(){

  }

  getTravelDates(){
    this.authProvider.getTravelDates().subscribe(data=>{
      this.travel_dates = data.dates;
      console.log(this.travel_dates);      
    })
  }



  /**
   * -------------------------------------------------------------
   * Origin Location
   * -------------------------------------------------------------
   * Open Location Search Page and Pick Origin Location
   */
  getLocationOrigin() {
    const modal = this.modalCtrl.create('LocationPage');
    modal.onDidDismiss((data: any) => {
      if (data) {
        this.searchObjects.originLocationName = data.name;
        this.searchObjects.originLocationAlpha3Code = data.alpha3Code;
        console.log("origin id"+data.id);
        this.from_id = data.id;
        this.from_name = data.name;
      }
    });
    modal.present();
  }

  /**
   * -------------------------------------------------------------
   * Destination Location
   * -------------------------------------------------------------
   * Open Location Search Page and Pick Destination Location
   */
  getLocationDestination() {
    const modal = this.modalCtrl.create('LocationPage');
    modal.onDidDismiss((data) => {
      if (data) {
        this.searchObjects.destinationLocationname = data.name;
        this.searchObjects.destinationLocationAlpha3Code = data.alpha3Code;
        console.log("destination  id"+data.id);
        this.to_id = data.id;
        this.to_name = data.name;
      }
    });
    modal.present();
  }
  getTravellingDates(){
    let modal = this.modalCtrl.create('TravelDatesPage');
    modal.onDidDismiss((data) =>{
      if(data){
        this.travel_date = data;
      }
    });
    modal.present();
  }

  /**
   * -------------------------------------------------------------
   * Find Bus
   * -------------------------------------------------------------
   */
  findBus() {      
    let  travelDetails = {
      from_id: this.from_id,
      to_id:  this.to_id,
      travel_date:this.travel_date,
      to_name: this.to_name,
      from_name:this.from_name
    }
    if(this.validateInputs()){
      console.log(this.from_id + 'destination id'+ this.to_id + 'date'+this.travel_date)    
      const modal = this.modalCtrl.create('BusListPage', {travelDetails:travelDetails});
      modal.present();
    }
  }
  validateInputs():boolean{
    if(this.from_id == null){
      this.authProvider.showToast(' Select  Pick Up Location')
      return false;
    }
    if(this.to_id == null){
      this.authProvider.showToast('Select Drop Off Location')
      return false;
    }
    if(this.to_id == this.from_id){
      this.authProvider.showToast('Pick Up location and Drop Off location Cannot be the same');
      return false;
    }
    if(this.travel_date == null){
      this.authProvider.showToast('Select Traveling Date')
    }
    return true;
  }

}
