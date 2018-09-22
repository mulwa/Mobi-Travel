import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainListPage } from './train-list';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    TrainListPage,
  ],
  imports: [
    IonicPageModule.forChild(TrainListPage),
    ComponentsModule
  ],
})
export class TrainListPageModule { }
