import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChefPage } from './chef';

@NgModule({
  declarations: [
    ChefPage,
  ],
  imports: [
    IonicPageModule.forChild(ChefPage),
  ],
})
export class ChefPageModule {}
