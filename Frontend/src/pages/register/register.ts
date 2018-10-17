import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { ManagerHomePage } from '../manager-home/manager-home';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  registerCredentials = { email: '', password: '', role: '' };
  constructor(public navCtrl: NavController, public authService: AuthProvider, public AlertCtrl : AlertController ) {
  }
  public GoToLogin() {

    
    this.navCtrl.push(LoginPage);
    
    }
  public register() {

    let details = {email : this.registerCredentials.email, password: this.registerCredentials.password, role: this.registerCredentials.role};
    var header = { "headers": {"Content-Type": "application/json"} };
    
    this.authService.createAccount(details).then((result) => {
      let data = JSON.parse(JSON.stringify(result["user"]));
      console.log(result);
    if ((data.role) == 'manager')
    this.navCtrl.push(ManagerHomePage, { username: this.registerCredentials.email });
    else
      console.log(data.role);

      //Shruthi add customer home here
    }, (err) => {

      
      /*let data = err.json();
     let alert = this.AlertCtrl.create({
        title:  "Error",
        message: data.error,
        buttons : ['Dismiss']
      });
      alert.present();
      console.log(data);*/
    });
    /*if (this.registerCredentials.role == 'manager')
      this.navCtrl.push(ManagerHomePage, { username: this.registerCredentials.email });

    else
      console.log("CUSTOMER")*/
  }
}
