import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';

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

  public employees(){
    this.navCtrl.push(HomePage);
  }


  public inventory(){
    this.navCtrl.push(SearchPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagerHomePage');
  }

}
