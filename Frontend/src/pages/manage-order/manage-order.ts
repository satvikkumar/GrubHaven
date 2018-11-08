import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { Storage } from '@ionic/storage';



import * as Enums from '../../assets/apiconfig';
import { ThrowStmt } from '@angular/compiler';

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
  dishes: any;
  quantity : any;
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
          this.quantity = [];
          this.dishes = [];
          for (let i in data) {

            this.table_no.push(data[i].table_number);
            this.dishes.push(data[i].dish);
            this.quantity.push(data[i].quantity);
            console.log(data[i]);


          }
          loading.dismiss();
        }, (err) => {
          console.log(err);
        });
    });

  }
  public get_details($event, i) {

    //console.log(this.dishes[i].length)

      this.list = "<table style='width:100%;'> <tr> <th>Dish</th> <th>Quantity</th> </tr>"
      let index = 0;
      for (index = 0; index < this.dishes[i].length; index++ ) {
        var element = "<tr> <td>" + this.dishes[i][index] + "</td><td align:'right'>    " + this.quantity[i][index] + "</td></tr>"
        this.list += element
      }
            
      this.list += "</table>"
      let alert = this.alertCtrl.create({
      title: 'Pending Order',
      message: this.list,
      buttons: ['Ok']
      });
      
      alert.present()
    }


  public remove(index){

   

    this.storage.get('r_name').then((val) => {
    let postParams = { hotel_name: val, table_number : this.table_no[index], dish: this.dishes[index] , quantity : this.quantity[index]  };
    console.log(postParams)
    let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      let url = Enums.APIURL.URL1;
      let path = url.concat("/api/removeOrder");


      this.http.post(path, JSON.stringify(postParams), { headers: headers })
        .subscribe(res => {

        }, (err) => {
          console.log(err);
        });

        this.ionViewCanEnter()
      });


  }
}
