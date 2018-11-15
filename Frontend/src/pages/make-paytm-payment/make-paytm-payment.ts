import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as Enums from '../../assets/apiconfig';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


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

  paymentSuccess= false;
  amount=1;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private iab: InAppBrowser, private alertCtrl: AlertController) {
    this.amount = this.navParams.get('amount');
    // HOW TO CALL THIS: 
    // this.navCtrl.push(MakePaytmPaymentPage, {amount: 1})
    // This will automatically remove your page if succesful, if it fails.
    // The orders page will be same state. 
    //
  }

  ionViewDidLoad() {
    // let amount = this.navParams.get('amount');

    console.log('ionViewDidLoad MakePaytmPaymentPage');

    let url = Enums.APIURL.URL1.concat("/api/paytm/initiatePayment?amount="+this.amount);
    const browser = this.iab.create(url, '_self', 'location=no,zoom=no');
    browser.on('exit').subscribe(()=> {
      if (this.paymentSuccess == true) {
        // PAYMENT SUCCESS
        //TODO: SET DB TO PAID. 
        //pop paytm page and order page
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
        
      } else {
        // PAYMENT FAILED
        // pop only payment page so they can try repay
        this.navCtrl.pop();
        let alert2 = this.alertCtrl.create({
          title: "Sorry, Payment Failed",
          subTitle: " Payment has failed. Please try again.",
          buttons: ['Dismiss']
        });
        alert2.present();

      }
    }, err => {
      console.log('error');
    })
    browser.on('loadstart').subscribe(event => {
      console.log(event.url);
      if (event.url.indexOf("success") >= 0) {
        this.paymentSuccess = true;
        //payment done succesfuly
        browser.close();
      }
      if (event.url.indexOf("fail") >= 0) {
        this.paymentSuccess = false;
        browser.close();
      }
    });

  }
}

