import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MenuController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';


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
  locations = ["Bangalore", "Bombay", "Delhi"];
  currLocation = "Bangalore";
  isLocationSet = false;
  reviewData:any;


  constructor(public menu: MenuController, private storage: Storage, public alertCtrl: AlertController, public navCtrl: NavController, public http: Http, public actionSheetCtrl: ActionSheetController) {

  }

  ionViewDidLoad() {
    this.activeMenu = 'menucust';
    this.menu.enable(true, 'menucust');
    this.menu.enable(false, 'menurest');
  }

  presentActionSheet() {
    let genButtons = []
    this.locations.forEach(element => {
      genButtons.push({
        text:element,
        handler: () => {
          this.isLocationSet = true
          this.currLocation = element
          console.log(this.currLocation)
          this.search()
        },
      })
    });
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Set Your Location', 
      buttons: genButtons
    });
    actionSheet.present();
  }

  public search() {

    let postParams = { city: this.currLocation };
    console.log(postParams);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = Enums.APIURL.URL1;
    let path = url.concat("/api/viewReview");

    console.log(path);

    this.http.post(path, JSON.stringify(postParams), { headers: headers })
      .subscribe(res => {

        var data = res.json();
        this.reviewData = data.slice;
        // this.reviews = [];
        // this.restaurant = [];
        // this.custname = [];
        // for (let i in data) {
        //   this.reviews.push(data[i].review);
        //   this.restaurant.push(data[i].hotel_name);
        //   this.custname.push(data[i].customer_name);
        // }
      }, (err) => {
        console.log(err);
      });
  }

}
