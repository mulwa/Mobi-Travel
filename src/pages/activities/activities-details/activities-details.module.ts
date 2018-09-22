import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivitiesDetailsPage } from './activities-details';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    ActivitiesDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivitiesDetailsPage),
    IonicImageViewerModule, ComponentsModule
  ],
})
export class ActivitiesDetailsPageModule { }
