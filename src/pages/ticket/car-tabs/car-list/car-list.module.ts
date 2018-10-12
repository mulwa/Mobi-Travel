import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarListPage } from './car-list';
import { IonicImageViewerModule } from 'ionic-img-viewer';


@NgModule({
  declarations: [
    CarListPage,
  ],
  imports: [
    IonicPageModule.forChild(CarListPage),
    IonicImageViewerModule
  ],
})
export class CarListPageModule { }
