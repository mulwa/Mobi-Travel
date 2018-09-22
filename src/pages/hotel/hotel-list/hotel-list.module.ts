import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotelListPage } from './hotel-list';
import { Ionic2RatingModule } from "ionic2-rating";
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    HotelListPage,
  ],
  imports: [
    IonicPageModule.forChild(HotelListPage),
    Ionic2RatingModule, IonicImageViewerModule,
    ComponentsModule
  ],
})
export class HotelListPageModule { }
