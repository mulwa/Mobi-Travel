import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivitiesListPage } from './activities-list';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    ActivitiesListPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivitiesListPage),
    IonicImageViewerModule, ComponentsModule
  ],
})
export class ActivitiesListPageModule { }
