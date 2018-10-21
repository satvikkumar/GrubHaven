import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { ManagerHomePage } from '../manager-home/manager-home';
import { LoginPage } from '../login/login';
import { CustomerHomePage } from '../customer-home/customer-home';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  registerCredentials = { email: '', password: '', role: '', restaurant_name : '' };
  manager: boolean = true;
        radio_select(value) {
        if (value == 'manager') {
    this.manager = false;
  } else if (value == 'user') {
    this.manager = true;
  }
}
  constructor(public navCtrl: NavController, public authService: AuthProvider, public AlertCtrl : AlertController ) {
  }
  public GoToLogin() {

    
    this.navCtrl.push(LoginPage);
    
    }
  public register() {

    let details = {email : this.registerCredentials.email, password: this.registerCredentials.password, role: this.registerCredentials.role, restaurant_name : this.registerCredentials.restaurant_name};
    var header = { "headers": {"Content-Type": "application/json"} };
    console.log(details);

    
    this.authService.createAccount(details).then((result) => {
      let data = JSON.parse(JSON.stringify(result["user"]));
      console.log(result);
    if ((this.registerCredentials.role) == 'manager')
    this.navCtrl.push(ManagerHomePage, { username: this.registerCredentials.email });
    else
    {
      this.navCtrl.push(CustomerHomePage);
      console.log(data.role);
    }

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
  }

}
