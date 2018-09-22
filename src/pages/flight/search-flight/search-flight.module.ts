import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchFlightPage } from './search-flight';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    SearchFlightPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchFlightPage),
    ComponentsModule
  ],
})
export class SearchFlightPageModule { }
