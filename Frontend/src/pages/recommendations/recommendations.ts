import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';

import * as Enums from '../../assets/apiconfig';

/**
 * Generated class for the RecommendationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recommendations',
  templateUrl: 'recommendations.html',
})
export class RecommendationsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MakeReservationsPage');
	
	let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = Enums.APIURL.URL1;
    let path = url.concat("/api/recommendation");
	
	this.http.post(path,null,{ headers: headers })
		.subscribe(res => {
		
          var data = res.json();
		  console.log("HEEE");
          console.log(data.length);
          this.hotel_rating = [];
          for (let i in data) {
			console.log('Hotel :'+data[i][0]+' Rate :'+data[i][1]);
            this.hotel_rating.push({hotel:data[i][0],rating:data[i][1]});
          }
        }, (err) => {
          console.log(err);
        });
	}	

}
