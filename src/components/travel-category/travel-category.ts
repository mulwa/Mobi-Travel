import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'travel-category',
  templateUrl: 'travel-category.html'
})
export class TravelCategoryComponent {

  text: string;

  categories: any = [   
    { icon: 'fa fa-bus', name: 'BUS', component: 'SearchBusPage' },
    { icon: 'fa fa-train', name: 'TRAIN', component: 'SearchTrainPage' },  
    
  ];

  constructor(public navCtrl: NavController) { }

  goToCategoryPage(page) {
    this.navCtrl.setRoot(page.component);
  }
}
