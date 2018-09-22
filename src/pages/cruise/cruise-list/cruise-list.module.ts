import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CruiseListPage } from './cruise-list';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    CruiseListPage,
  ],
  imports: [
    IonicPageModule.forChild(CruiseListPage),
    IonicImageViewerModule, ComponentsModule
  ],
})
export class CruiseListPageModule { }
