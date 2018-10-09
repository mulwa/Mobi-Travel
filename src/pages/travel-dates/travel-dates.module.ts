import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TravelDatesPage } from './travel-dates';

@NgModule({
  declarations: [
    TravelDatesPage,
  ],
  imports: [
    IonicPageModule.forChild(TravelDatesPage),
  ],
})
export class TravelDatesPageModule {}
