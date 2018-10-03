import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JambopayCheckoutPage } from './jambopay-checkout';

@NgModule({
  declarations: [
    JambopayCheckoutPage,
  ],
  imports: [
    IonicPageModule.forChild(JambopayCheckoutPage),
  ],
})
export class JambopayCheckoutPageModule {}
