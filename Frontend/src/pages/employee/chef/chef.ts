import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';

import * as Enums from '../../../assets/apiconfig';

/**
 * Generated class for the ChefPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chef',
  templateUrl: 'chef.html',
})
export class ChefPage {

 
  chefs: any;

  constructor(  public loadingCtrl: LoadingController,public navCtrl: NavController,public http: Http ) {

  }

  ionViewCanEnter()
  {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    let postParams = {employee_type:"chef"};
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

        let url = Enums.APIURL.URL1;
        let path = url.concat( "/api/list");

        this.http.post(path, JSON.stringify(postParams), {headers: headers})
          .subscribe(res => {
 
            var data = res.json();
            this.chefs=[];
            for (let i in data)
            {
              this.chefs.push(data[i].employee_name);
            
            }
           loading.dismiss();
          }, (err) => {
            console.log(err);
          });
  }
  public get_details($event,chef)
  {
    console.log(chef)
  }
}
