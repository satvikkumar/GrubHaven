import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { ManagerHomePage } from '../manager-home/manager-home';
import { LoginPage } from '../login/login';
import { Http, Headers } from '@angular/http';
import * as Enums from '../../assets/apiconfig';
import { CustomerHomePage } from '../customer-home/customer-home';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  registerCredentials = {  unique_id : '', email: '', password: '', role: '', restaurant_name : '' };
  flag = 1;
  manager: boolean = true;
        radio_select(value) {
        if (value == 'manager') {
    this.manager = false;
  } else if (value == 'user') {
    this.manager = true;
  }
  
}

  constructor(private storage: Storage, private alertCtrl: AlertController , public http: Http, public navCtrl: NavController, public authService: AuthProvider, public AlertCtrl : AlertController ) {
  }
  public GoToLogin() {

    
    this.navCtrl.push(LoginPage);
    
    }
  public register() {

    let details = {email : this.registerCredentials.email, password: this.registerCredentials.password, role: this.registerCredentials.role, restaurant_name : this.registerCredentials.restaurant_name};
    var header = { "headers": {"Content-Type": "application/json"} };
    console.log(details);

    if ((this.registerCredentials.role) == 'manager'){
      let postParams = {uniqueId: this.registerCredentials.unique_id, name : this.registerCredentials.restaurant_name};
  
    let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = Enums.APIURL.URL1;
        let path = url.concat( "/api/verify");
        console.log(path);
        console.log(postParams);


        this.http.post(path, JSON.stringify(postParams), {headers: headers})
          .subscribe(res => {
 
            console.log(res);
            //let data = res.json();
            console.log(JSON.stringify(res).length)
            if (JSON.stringify(res).length < 150)
            {
              this.flag = 0;
              let alert = this.alertCtrl.create({
                title: 'WARNING',
                subTitle: 'You are not authorized to do this',
                buttons: ['Dismiss']
              });
              alert.present();
            }
    });
  }

    if (this.flag == 1)
    {
      this.authService.createAccount(details).then((result) => {
        let data = JSON.parse(JSON.stringify(result["user"]));
        console.log(result);
      if ((this.registerCredentials.role) == 'manager'){
        this.storage.set('r_name', data.restaurant_name);
        this.navCtrl.push(ManagerHomePage, { username: this.registerCredentials.email });
      }
      else
      {
        this.navCtrl.push(CustomerHomePage);
        console.log(data.role);
      }

      });
   }
  }

}
