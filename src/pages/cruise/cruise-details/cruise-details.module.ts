import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CruiseDetailsPage } from './cruise-details';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    CruiseDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CruiseDetailsPage),
    IonicImageViewerModule,
    ComponentsModule
  ],
})
export class CruiseDetailsPageModule { }
