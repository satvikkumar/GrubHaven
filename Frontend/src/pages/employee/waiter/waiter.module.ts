import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaiterPage } from './waiter';

@NgModule({
  declarations: [
    WaiterPage,
  ],
  imports: [
    IonicPageModule.forChild(WaiterPage),
  ],
})
export class WaiterPageModule {}
