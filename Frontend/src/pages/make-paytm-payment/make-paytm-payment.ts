import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as Enums from '../../assets/apiconfig';
import { Http, Headers } from '@angular/http';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the MakePaytmPaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-make-paytm-payment',
  templateUrl: 'make-paytm-payment.html',
})
export class MakePaytmPaymentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MakePaytmPaymentPage');

    let postParams = {
      "TXN_AMOUNT": 10.0
    };

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = Enums.APIURL.URL1;
    let path = url.concat("/api/paytm/checksum");
    console.log(path);
    console.log(postParams);

    this.http.post(path, JSON.stringify(postParams), {
        headers: headers
      })
      .subscribe(res => {
        console.log(res.json());
          // this.navCtrl.push(CustomerHomePage);
        },
        (err) => {
          console.log(err);
        });
  }
}

