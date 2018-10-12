import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../components/components.module';
import { SearchTicketPage } from './search-ticket';

@NgModule({
  declarations: [
    SearchTicketPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchTicketPage),
    ComponentsModule
  ],
})
export class SearchCarPageModule { }
