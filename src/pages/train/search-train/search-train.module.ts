import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchTrainPage } from './search-train';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    SearchTrainPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchTrainPage),
    ComponentsModule
  ],
})
export class SearchTrainPageModule { }
