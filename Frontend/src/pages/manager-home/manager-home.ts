import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the ManagerHomePage page.
 *a
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manager-home',
  templateUrl: 'manager-home.html',
})
export class ManagerHomePage {

  user: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get('username');
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagerHomePage');
  }

}
