import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainDetailsPage } from './train-details';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    TrainDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TrainDetailsPage),
    ComponentsModule
  ],
})
export class TrainDetailsPageModule { }
