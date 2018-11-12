import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TablesPage } from './tables';

@NgModule({
  declarations: [
    TablesPage,
  ],
  imports: [
    IonicPageModule.forChild(TablesPage),
  ],
})
export class TablesPageModule {}
