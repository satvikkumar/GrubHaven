import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MakeReservationsPage } from './make-reservations';

@NgModule({
  declarations: [
    MakeReservationsPage,
  ],
  imports: [
    IonicPageModule.forChild(MakeReservationsPage),
  ],
})
export class MakeReservationsPageModule {}
