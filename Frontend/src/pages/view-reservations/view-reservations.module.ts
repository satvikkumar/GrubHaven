import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewReservationsPage } from './view-reservations';

@NgModule({
  declarations: [
    ViewReservationsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewReservationsPage),
  ],
})
export class ViewReservationsPageModule {}
