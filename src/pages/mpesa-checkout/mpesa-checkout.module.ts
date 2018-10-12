import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MpesaCheckoutPage } from './mpesa-checkout';

@NgModule({
  declarations: [
    MpesaCheckoutPage,
  ],
  imports: [
    IonicPageModule.forChild(MpesaCheckoutPage),
  ],
})
export class MpesaCheckoutPageModule {}
