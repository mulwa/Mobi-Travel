import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchVacationPage } from './search-vacation';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    SearchVacationPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchVacationPage),
    ComponentsModule
  ],
})
export class SearchVacationPageModule { }
