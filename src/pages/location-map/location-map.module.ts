import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationMapPage } from './location-map';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    LocationMapPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(LocationMapPage),
  ],
})
export class LocationMapPageModule { }
