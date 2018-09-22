import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlightListPage } from './flight-list';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    FlightListPage,
  ],
  imports: [
    IonicPageModule.forChild(FlightListPage),
    ComponentsModule
  ],
})
export class FlightListPageModule { }
