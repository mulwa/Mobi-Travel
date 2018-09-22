import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'travel-category',
  templateUrl: 'travel-category.html'
})
export class TravelCategoryComponent {

  text: string;

  categories: any = [
    { icon: 'fa fa-plane', name: 'FLIGHT', component: 'SearchFlightPage' },
    { icon: 'fa fa-bed', name: 'HOTELS', component: 'SearchHotelsPage' },
    { icon: 'fa fa-car', name: 'CAR', component: 'SearchCarPage' },
    { icon: 'fa fa-bus', name: 'BUS', component: 'SearchBusPage' },
    { icon: 'fa fa-train', name: 'TRAIN', component: 'SearchTrainPage' },
    { icon: 'fa fa-pagelines', name: 'VACATION', component: 'SearchVacationPage' },
    { icon: 'fa fa-ship', name: 'CRUISE', component: 'SearchCruisePage' },
    { icon: 'fa fa-cog', name: 'ACTIVITIES', component: 'SearchActivitiesPage' }
  ];

  constructor(public navCtrl: NavController) { }

  goToCategoryPage(page) {
    this.navCtrl.setRoot(page.component);
  }
}
