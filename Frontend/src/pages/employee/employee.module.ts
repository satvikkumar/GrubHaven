import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployeePage } from './employee';

@NgModule({
  declarations: [
    EmployeePage,
  ],
  imports: [
    IonicPageModule.forChild(EmployeePage),
  ],
})
export class EmployeePageModule {}
