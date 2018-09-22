import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchBusPage } from './search-bus';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    SearchBusPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchBusPage),
    ComponentsModule
  ],
})
export class SearchBusPageModule { }
