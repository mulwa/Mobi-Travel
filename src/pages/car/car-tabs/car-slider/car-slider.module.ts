import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarSliderPage } from './car-slider';

@NgModule({
  declarations: [
    CarSliderPage,
  ],
  imports: [
    IonicPageModule.forChild(CarSliderPage),
  ],
})
export class CarSliderPageModule {}
