import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Headers } from '@angular/http';
import * as Enums from '../../assets/apiconfig';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ViewReservationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-reservations',
  templateUrl: 'view-reservations.html',
})
export class ViewReservationsPage {

  customer_name : any;
  r_time : any;
  r_date : any;
  phone : any;


  constructor(private alertCtrl : AlertController, private storage: Storage,public navCtrl: NavController, public navParams: NavParams , public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewReservationsPage');
  }


  ionViewCanEnter()
  {
    this.storage.get('r_name').then((val) => {


      let postParams = { hotel_name: val };
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      let url = Enums.APIURL.URL1;
      let path = url.concat("/api/viewReservations");


      this.http.post(path, JSON.stringify(postParams), { headers: headers })
        .subscribe(res => {

          console.log(data);

          var data = res.json();
          this.customer_name = [];
          this.r_time = [];
          this.r_date = [];
          this.phone = [];
          for (let i in data) {

            this.customer_name.push(data[i].customer_name);
            this.r_time.push(data[i].time);
            this.r_date.push(data[i].date);
            this.phone.push(data[i].contact);

          }
        }, (err) => {
          console.log(err);
        });
    });

  }

  public cancel(name , r_date , r_time){
    this.storage.get('r_name').then((val) => {


      let postParams = { hotel_name: val, customer_name : name, time: r_time , date: r_date  };
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      let url = Enums.APIURL.URL1;
      let path = url.concat("/api/removeReservation");


      this.http.post(path, JSON.stringify(postParams), { headers: headers })
        .subscribe(res => {

        }, (err) => {
          console.log(err);
        });

        this.ionViewCanEnter()
    });


  }

  public arrived(name , r_date , r_time){
    console.log("Hello")


  }
}
