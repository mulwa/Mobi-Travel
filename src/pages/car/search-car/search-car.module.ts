import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchCarPage } from './search-car';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    SearchCarPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchCarPage),
    ComponentsModule
  ],
})
export class SearchCarPageModule { }
