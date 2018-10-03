import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WalletCheckoutPage } from './wallet-checkout';

@NgModule({
  declarations: [
    WalletCheckoutPage,
  ],
  imports: [
    IonicPageModule.forChild(WalletCheckoutPage),
  ],
})
export class WalletCheckoutPageModule {}
