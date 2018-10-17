import { Component } from '@angular/core';

import { WaiterPage } from './waiter/waiter';
import { ChefPage } from './chef/chef';

@Component({
  selector: 'page-employee',
  templateUrl: 'employee.html'
})
export class EmployeePage {

  Chef_tab = ChefPage;
  Waiter_tab = WaiterPage;
  
  constructor(){

  }

}
