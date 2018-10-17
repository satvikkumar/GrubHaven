import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import * as Enums from '../../../assets/apiconfig';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';


/**
 * Generated class for the WaiterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-waiter',
  templateUrl: 'waiter.html',
})
export class WaiterPage {
  waiters: any;

  constructor(  public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams,public http: Http) {
  }

  ionViewCanEnter()
  {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();

    let postParams = {employee_type:"waiter"};
  
    let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = Enums.APIURL.URL1;
        let path = url.concat( "/api/list");

        this.http.post(path, JSON.stringify(postParams), {headers: headers})
          .subscribe(res => {
 
            var data = res.json();
            this.waiters=[];
            for (let i in data)
            {
              this.waiters.push(data[i].employee_name);
            
            }

           loading.dismiss();
          }, (err) => {
            console.log(err);
          });
  }
  public get_details($event,waiter)
  {
    console.log(waiter)
  }
}
