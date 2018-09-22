import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarDetailsPage } from './car-details';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    CarDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CarDetailsPage),
    IonicImageViewerModule,
    ComponentsModule
  ],
})
export class CarDetailsPageModule { }
