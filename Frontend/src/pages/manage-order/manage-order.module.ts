import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageOrderPage } from './manage-order';

@NgModule({
  declarations: [
    ManageOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageOrderPage),
  ],
})
export class ManageOrderPageModule {}
