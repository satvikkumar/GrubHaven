import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { Storage } from '@ionic/storage';



import * as Enums from '../../assets/apiconfig';

/**
 * Generated class for the ManageOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manage-order',
  templateUrl: 'manage-order.html',
})
export class ManageOrderPage {

  cust_name: any;
  dish: any;
  quant: any;
  table_no: any;
  r_name: any;
  list: any;

  constructor(private storage: Storage, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public navCtrl: NavController, public http: Http) {

  }

  ionViewCanEnter() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    this.storage.get('r_name').then((val) => {


      let postParams = { hotel_name: val };
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      let url = Enums.APIURL.URL1;
      let path = url.concat("/api/vieworder");

      this.http.post(path, JSON.stringify(postParams), { headers: headers })
        .subscribe(res => {

          var data = res.json();
          this.table_no = [];
          for (let i in data) {

            this.table_no.push(data[i].table_number);


          }
          loading.dismiss();
        }, (err) => {
          console.log(err);
        });
    });
  }
  public get_details($event, t) {

    this.storage.get('r_name').then((val) => {

      let postParams = { hotel_name: val, table_no: t };
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      let url = Enums.APIURL.URL1;
      let path = url.concat("/api/orderdetails");

      this.http.post(path, JSON.stringify(postParams), { headers: headers })
        .subscribe(res => {
          var data = res.json();
          // console.log(data)

          this.list = "<table style='width:100%;'> <tr> <th>Dish</th> <th>Quantity</th> </tr>"
          for (let i in data[0].dish) {
            var element = "<tr> <td>" + data[0].dish[i] + "</td><td align:'right'>    " + data[0].quantity[i] + "</td></tr>"
            this.list += element
            //  console.log(data[0].quantity[i]);
          }
          this.list += "</table>"
          let alert = this.alertCtrl.create({
            title: 'Pending Order',
            message: this.list,
            buttons: ['Ok']
          });
          alert.present();
        });

    });
  }
}