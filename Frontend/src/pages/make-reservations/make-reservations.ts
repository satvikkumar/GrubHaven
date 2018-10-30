import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as Enums from '../../assets/apiconfig';

/**
 * Generated class for the MakeReservationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-make-reservations',
  templateUrl: 'make-reservations.html',
})
export class MakeReservationsPage {

  restaurant_name = ''
  path = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.restaurant_name = navParams.get('restaurant_name');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MakeReservationsPage');
    
    let url = Enums.APIURL.URL1;
    let rname = "/" + this.restaurant_name;
    let image_name = rname.concat(".jpg");
    this.path = url.concat(image_name);

  }

}
