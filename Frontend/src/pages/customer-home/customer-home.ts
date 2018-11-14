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
  rating: any;


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

  showReviewAlert(item) {
    let alert2 = this.alertCtrl.create({
      title: item.hotel_name,
      cssClass: "custom-alert",
      subTitle: item.rating + "/5 review by " + item.customer_name,
      message: item.review,
      buttons: ['Dismiss']
    });
    alert2.present();
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
        this.reviewData = data;
        this.rating = []
        for (let i in data){
          let rate = [];
          for (let j = 0; j< parseInt(data[i].rating); j++ )
          {
            rate.push("star");
          }
          for (let j = parseInt(data[i].rating); j<5; j++ )
          {
            rate.push("star-outline");
          }
          this.rating.push(rate)

          

        }
        console.log(this.rating[0])

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
