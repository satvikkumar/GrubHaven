import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewBillPage } from './view-bill';

@NgModule({
  declarations: [
    ViewBillPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewBillPage),
  ],
})
export class ViewBillPageModule {}
