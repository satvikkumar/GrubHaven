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

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ManagerHomePage,
    EmployeePage,
    SearchPage,
    RegisterPage,
    ChefPage,
    WaiterPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
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
    EmployeePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
