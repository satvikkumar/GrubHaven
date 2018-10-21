import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MenuController } from 'ionic-angular';

import * as Enums from '../../assets/apiconfig';
import { CustomerHomePage } from '../customer-home/customer-home';

@IonicPage()
@Component({
  selector: 'page-review',
  templateUrl: 'review.html',
})
export class ReviewPage {

  activeMenu: string = 'none';
  rating = '';
  restaurant_name = '';
  customer_name = '';
  review = '';
  
  constructor( public menu : MenuController,private storage: Storage,  public alertCtrl: AlertController, public navCtrl: NavController,public http: Http ) {

  }

  ionViewDidLoad()
  {
    this.activeMenu = 'menucust';
    this.menu.enable(true, 'menucust');
    this.menu.enable(false, 'menurest');
  }


  public submit()
  {
    var value = parseInt(this.rating);
    let postParams = {hotel_name : this.restaurant_name, customer_name: this.customer_name , review : this.review, rating: value};
    console.log(postParams);

    let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = Enums.APIURL.URL1;
        let path = url.concat( "/api/addReview");
        console.log(path);
        console.log(postParams);


        this.http.post(path, JSON.stringify(postParams), {headers: headers})
          .subscribe(res => {

            let alert2 = this.alertCtrl.create({
              title: "Thanks :)",
              subTitle: "Successfully Submitted Review",
              buttons: ['Dismiss']
            });
            alert2.present();

            this.navCtrl.push(CustomerHomePage);
          },
          (err) => {
            console.log(err);
          });
    
  }

}


