import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-travel-dates',
  templateUrl: 'travel-dates.html',
})
export class TravelDatesPage {
  traveling_dates:any = [];

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public viewCtrl: ViewController,
     public loadingCtrl:LoadingController,
     public authProvider:AuthenticationProvider ) {
  }
  ngOnInit(): void {
    this.getTravelDates();    
  }

  ionViewDidLoad() {    
  }

  getTravelDates(){
    let loader = this.loadingCtrl.create({
      content:"Please Wait Fetching Traveling Dates"
    });
    loader.present().then(()=>{
      this.authProvider.getTravelDates().subscribe(data=>{
        loader.dismiss();
        this.traveling_dates = data.dates;
        console.log(this.traveling_dates);      
      }, error =>{
        loader.dismiss();
        console.log('an error has Occured'+error)
      })

    })
    
  }
  chooseDate(date) {
    this.viewCtrl.dismiss(date);
    console.log('Selected Date'+date)
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


}
