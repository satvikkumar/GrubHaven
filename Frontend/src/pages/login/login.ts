import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { RegisterPage } from '../register/register';
//import { Auth } from '../../providers/auth/auth';
import { ManagerHomePage } from '../manager-home/manager-home';
 
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  //registerCredentials = { email: '', password: '' };
  email: string;
  password: string;
 
  constructor(private nav: NavController , private alertCtrl: AlertController, private loadingCtrl: LoadingController, public http:HttpClient) { }
 
  public createAccount() {
  this.nav.push(RegisterPage);
  
  }
 
  public login() {

  /*let postParams = {email : this.email, password: this.password};
  var header = { "headers": {"Content-Type": "application/json"} };

  console.log(postParams);
  this.authService.login(postParams).then((result) => {

    let data = JSON.parse(JSON.stringify(result["user"]));
    if ((data.role) == 'reader')
      this.nav.push(ManagerHomePage, { username: this.email });
    else
      console.log(data.role);
    //@Shruthi add the navigation here
  }, (err) => {
    console.log(err);*/

    this.nav.push(ManagerHomePage, { username: this.email });
  };

  
  }