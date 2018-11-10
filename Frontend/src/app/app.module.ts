import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage'

import { MyApp } from './app.component';
import { ManagerHomePage } from '../pages/manager-home/manager-home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';

import { AuthProvider } from '../providers/auth/auth';
import { HttpClientModule } from '@angular/common/http';
import { EmployeePage } from '../pages/employee/employee';
import { RegisterPage } from '../pages/register/register';
import { SearchPage } from '../pages/search/search';
import { ChefPage } from '../pages/employee/chef/chef';
import { WaiterPage } from '../pages/employee/waiter/waiter';
import { CustomerHomePage } from '../pages/customer-home/customer-home';
import { ReviewPage } from '../pages/review/review';
import { MakeReservationsPage } from '../pages/make-reservations/make-reservations';
import { ManageOrderPage } from '../pages/manage-order/manage-order';
import { ViewReservationsPage } from '../pages/view-reservations/view-reservations';
import { PlaceOrderPage } from '../pages/place-order/place-order';
import { ViewBillPage } from '../pages/view-bill/view-bill';
import { MakePaytmPaymentPage } from './../pages/make-paytm-payment/make-paytm-payment';
import { InAppBrowser } from '@ionic-native/in-app-browser';




@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ManagerHomePage,
    EmployeePage,
    SearchPage,
    RegisterPage,
    ChefPage,
    WaiterPage,
    CustomerHomePage,
    ReviewPage,
    MakeReservationsPage,
    ManageOrderPage,
    ViewReservationsPage,
    PlaceOrderPage,
    ViewBillPage, 
    MakePaytmPaymentPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top'}),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ManagerHomePage,
    RegisterPage,
    SearchPage,
    ChefPage,
    WaiterPage,
    EmployeePage,
    CustomerHomePage,
    ReviewPage,
    MakeReservationsPage,
    ManageOrderPage,
    ViewReservationsPage,
    PlaceOrderPage,
    ViewBillPage,
    MakePaytmPaymentPage
  ],
  providers: [
    InAppBrowser,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
