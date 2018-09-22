import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchActivitiesPage } from './search-activities';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    SearchActivitiesPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchActivitiesPage),
    ComponentsModule
  ],
})
export class SearchActivitiesPageModule { }
