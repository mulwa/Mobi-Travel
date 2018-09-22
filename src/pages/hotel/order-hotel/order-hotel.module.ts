import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderHotelPage } from './order-hotel';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    OrderHotelPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(OrderHotelPage),
  ],
})
export class OrderHotelPageModule { }
