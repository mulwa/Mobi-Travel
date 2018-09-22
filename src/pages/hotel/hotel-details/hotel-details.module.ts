import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotelDetailsPage } from './hotel-details';
import { Ionic2RatingModule } from "ionic2-rating";
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    HotelDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(HotelDetailsPage),
    Ionic2RatingModule, ComponentsModule
  ],
})
export class HotelDetailsPageModule { }
