import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

import { AuthProvider } from '../../providers/auth/auth';
import { ManagerHomePage } from '../manager-home/manager-home';
import { RegisterPage } from '../register/register';
import { CustomerHomePage } from '../customer-home/customer-home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading: Loading;
  email: string;
  password: string;

  constructor(private storage: Storage, private nav: NavController, public authService: AuthProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController, public http: HttpClient) { }

  public createAccount() {

    this.nav.setRoot(RegisterPage);

  }

  public login() {

    let postParams = { email: this.email, password: this.password };
    var header = { "headers": { "Content-Type": "application/json" } };

    console.log(postParams);
    this.authService.login(postParams).then((result) => {

      let data = JSON.parse(JSON.stringify(result["user"]));
      if ((data.role) == 'manager') {
        console.log(data.restaurant_name);
        this.storage.set('r_name', data.restaurant_name);

        this.nav.setRoot(ManagerHomePage, { username: this.email });

      }
      else {
        this.nav.setRoot(CustomerHomePage);
      }
    }, (err) => {
      let alert = this.alertCtrl.create({
        title: 'Sorry :(',
        subTitle: 'You are not a registered user',
        buttons: ['Dismiss']
      });
      alert.present();




      //this.nav.push(ManagerHomePage, { username: this.email });
    });

  }

}