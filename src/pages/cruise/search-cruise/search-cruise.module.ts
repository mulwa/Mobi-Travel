import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchCruisePage } from './search-cruise';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    SearchCruisePage,
  ],
  imports: [
    IonicPageModule.forChild(SearchCruisePage),
    ComponentsModule
  ],
})
export class SearchCruisePageModule { }
