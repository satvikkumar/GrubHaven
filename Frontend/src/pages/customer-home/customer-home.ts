import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MenuController } from 'ionic-angular';

import * as Enums from '../../assets/apiconfig';

/**
 * Generated class for the CustomerHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer-home',
  templateUrl: 'customer-home.html',
})
export class CustomerHomePage {

  reviews: any;
  restaurant: any;
  city: string;
  custname: any;
  activeMenu: string = 'none';


  constructor(public menu: MenuController, private storage: Storage, public alertCtrl: AlertController, public navCtrl: NavController, public http: Http) {

  }

  ionViewDidLoad() {
    this.activeMenu = 'menucust';
    this.menu.enable(true, 'menucust');
    this.menu.enable(false, 'menurest');
  }

  public search() {

    let postParams = { city: this.city };
    console.log(postParams);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = Enums.APIURL.URL1;
    let path = url.concat("/api/viewReview");

    console.log(path);

    this.http.post(path, JSON.stringify(postParams), { headers: headers })
      .subscribe(res => {

        var data = res.json();
        this.reviews = [];
        this.restaurant = [];
        this.custname = [];
        for (let i in data) {
          this.reviews.push(data[i].review);
          this.restaurant.push(data[i].hotel_name);
          this.custname.push(data[i].customer_name);
        }
      }, (err) => {
        console.log(err);
      });
  }

}
