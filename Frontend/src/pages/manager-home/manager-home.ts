import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';


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
  activeMenu: string = 'none';
  constructor(public menu: MenuController, public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get('username');
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagerHomePage');
    this.activeMenu = 'menurest';
    this.menu.enable(true, 'menurest');
    this.menu.enable(false, 'menucust');
  }

}
