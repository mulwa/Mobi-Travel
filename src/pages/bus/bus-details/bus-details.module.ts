import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusDetailsPage } from './bus-details';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    BusDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BusDetailsPage),
    ComponentsModule
  ],
})
export class BusDetailsPageModule { }
