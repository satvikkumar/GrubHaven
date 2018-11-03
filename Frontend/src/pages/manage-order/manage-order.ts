import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
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

  constructor(private storage: Storage, public loadingCtrl: LoadingController, public navCtrl: NavController, public http: Http) {

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
          this.dish = [];
          this.quant = [];
          this.table_no = [];
          for (let i in data) {
            if (data[i].delivered == 'no') {
              this.table_no.push(data[i].table_number);
              this.dish.push(data[i].dish);
              this.quant.push(data[i].quantity);
            }

          }
          loading.dismiss();
        }, (err) => {
          console.log(err);
        });
    });
  }
  public get_details($event, t) {
    console.log(this.table_no);
    console.log(this.dish);
    console.log(this.quant);
  }


}
