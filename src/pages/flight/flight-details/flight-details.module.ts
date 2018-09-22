import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlightDetailsPage } from './flight-details';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    FlightDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(FlightDetailsPage),
    ComponentsModule
  ],
})
export class FlightDetailsPageModule { }
