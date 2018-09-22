import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusListPage } from './bus-list';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    BusListPage,
  ],
  imports: [
    IonicPageModule.forChild(BusListPage),
    ComponentsModule
  ],
})
export class BusListPageModule { }
