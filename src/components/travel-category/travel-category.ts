import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { Search } from '../../models/search';
import { Dates } from '../../models/date';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

@Component({
  selector: 'travel-category',
  templateUrl: 'travel-category.html'
})
export class TravelCategoryComponent {
  searchObjects: Search = new Search();  
  from_id:number;
  to_id:number;
  from_name:string;
  to_name:string;
  travel_date:any;
  travel_dates:Dates[];

  text: string;

  categories: any = [   
    { icon: 'fa fa-bus', name: 'BUS', component: 'SearchBusPage' },
    { icon: 'fa fa-train', name: 'TRAIN', component: 'SearchTrainPage' },  
    
  ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams, 
              private authProvider: AuthenticationProvider,   
              public modalCtrl: ModalController) { }

  goToCategoryPage(page) {
    this.navCtrl.setRoot(page.component);
  }
  getTravelDates(){
    this.authProvider.getTravelDates().subscribe(data=>{
      this.travel_dates = data.dates;
      console.log(this.travel_dates);      
    })
  }
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

  findBus() {      
    let  travelDetails = {
      from_id: this.from_id,
      to_id:  this.to_id,
      travel_date:this.travel_date,
      to_name: this.to_name,
      from_name:this.from_name
    }
    if(this.validateInput()){
      console.log(this.from_id + 'destination id'+ this.to_id + 'date'+this.travel_date)    
      const modal = this.modalCtrl.create('BusListPage', {travelDetails:travelDetails});
      modal.present();
    }
    
  }
  validateInput():boolean{
    if(this.travel_date == null){
      this.authProvider.showToast("Select Traveling Date")
      return false;
    }
    if(this.to_id == null){
      this.authProvider.showToast('Please Select Your Destination')
      return false;
    }
    if(this.to_id == this.from_id){
      this.authProvider.showToast("Pick Up location cannot be the same as Drop off location")
    }
    if(this.from_id == null){
      this.authProvider.showToast("Please Select Pick Location")
      return false;
    }
    return true;
  }
}
