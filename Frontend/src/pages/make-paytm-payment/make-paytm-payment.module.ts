import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MakePaytmPaymentPage } from './make-paytm-payment';

@NgModule({
  declarations: [
    MakePaytmPaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(MakePaytmPaymentPage),
  ],
})
export class MakePaytmPaymentPageModule {}
