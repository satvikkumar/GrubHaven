import { MakePaytmPaymentPage } from './../pages/make-paytm-payment/make-paytm-payment';
import { CustomerHomePage } from './../pages/customer-home/customer-home';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ManagerHomePage } from '../pages/manager-home/manager-home';
import { LoginPage } from '../pages/login/login';
import { EmployeePage } from '../pages/employee/employee';
import { SearchPage } from '../pages/search/search';
import { ReviewPage } from '../pages/review/review';
import { ManageOrderPage } from '../pages/manage-order/manage-order';
import { ViewReservationsPage } from '../pages/view-reservations/view-reservations';
import { PlaceOrderPage } from '../pages/place-order/place-order';
import { ViewBillPage } from '../pages/view-bill/view-bill';
import { InventoryPage } from '../pages/inventory/inventory';
import { TablesPage } from '../pages/tables/tables';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: ManagerHomePage }
    ];

  }
  public goToEmployees(){
    this.nav.push(EmployeePage);
  }
  public goToSearch(){
    this.nav.push(SearchPage);
  }
  public goToReview(){
    this.nav.push(ReviewPage);
  }
  public goToOrders(){
    this.nav.push(ManageOrderPage)
  }

  public goToPlaceOrder(){
    this.nav.push(PlaceOrderPage)
  }

  public goToReservations(){
    this.nav.push(ViewReservationsPage)
  }

  public goToBill(){
    this.nav.push(ViewBillPage)
  }

  public logout(){
    this.nav.push(LoginPage)
  }

  public goToCustomerHome(){
    this.nav.push(CustomerHomePage)

  }
  public goToInventory(){
    this.nav.push(InventoryPage)
  }

  public goToTables(){
    this.nav.push(TablesPage);
  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
