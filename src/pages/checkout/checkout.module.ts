import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckoutPage } from './checkout';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CheckoutPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CheckoutPage),
  ],
})
export class CheckoutPageModule { }
