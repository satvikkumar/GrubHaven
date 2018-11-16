import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageMenuPage } from './manage-menu';

@NgModule({
  declarations: [
    ManageMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageMenuPage),
  ],
})
export class ManageMenuPageModule {}
