import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
//import { Auth } from '../../providers/auth/auth';
import { ManagerHomePage } from '../manager-home/manager-home';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  registerCredentials = { email: '', password: '', role: '' };
  constructor(public navCtrl: NavController, public AlertCtrl : AlertController ) {
  }

  public register() {

    /*let details = {email : this.registerCredentials.email, password: this.registerCredentials.password, role: this.registerCredentials.role};
    var header = { "headers": {"Content-Type": "application/json"} };
    
    this.authService.createAccount(details).then((result) => {
      let data = JSON.parse(JSON.stringify(result["user"]));
    if ((data.role) == 'reader')
    this.navCtrl.push(ManagerHomePage, { username: this.registerCredentials.email });
    else
      console.log(data.role);

      //Shruthi add customer home here
    }, (err) => {

      
      let data = err.json();
     let alert = this.AlertCtrl.create({
        title:  "Error",
        message: data.error,
        buttons : ['Dismiss']
      });
      alert.present();
      console.log(data);
    });*/
    if (this.registerCredentials.role == 'manager')
      this.navCtrl.push(ManagerHomePage, { username: this.registerCredentials.email });

    else
      console.log("CUSTOMER")
  }
}
