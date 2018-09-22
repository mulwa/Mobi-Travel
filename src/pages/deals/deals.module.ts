import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DealsPage } from './deals';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DealsPage,
  ],
  imports: [
    IonicPageModule.forChild(DealsPage), IonicImageViewerModule,
    ComponentsModule
  ],
})
export class DealsPageModule { }
