import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerHomePage } from './customer-home';

@NgModule({
  declarations: [
    CustomerHomePage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerHomePage),
  ],
})
export class CustomerHomePageModule {}
