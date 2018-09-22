import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchHotelsPage } from './search-hotels';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    SearchHotelsPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchHotelsPage),
    ComponentsModule
  ],
})
export class SearchHotelsPageModule { }
