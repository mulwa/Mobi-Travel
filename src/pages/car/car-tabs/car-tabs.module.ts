import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarTabsPage } from './car-tabs';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    CarTabsPage,
  ],
  imports: [
    SuperTabsModule, ComponentsModule,
    IonicPageModule.forChild(CarTabsPage),
  ],
})
export class CarTabsPageModule { }
