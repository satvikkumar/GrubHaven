import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import * as Enums from '../../../assets/apiconfig';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


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

  constructor( private storage: Storage,  public alertCtrl: AlertController, public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams,public http: Http) {
  }

  ionViewCanEnter()
  {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    var r_name = '';
    loading.present();
    this.storage.get('r_name').then((val) => {
      console.log(val);
        r_name = val 
    
    console.log(r_name)
    let postParams = {employee_type:"waiter", hotel_name: r_name};
    console.log(postParams);
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
        });
  }
    
  public get_details($event,waiter)
  {
    let postParams = {employee_name: waiter};
  
    let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = Enums.APIURL.URL1;
        let path = url.concat( "/api/employee");
    

        this.http.post(path, JSON.stringify(postParams), {headers: headers})
          .subscribe(res => {
 
            let data = res.json();
            let alert = this.alertCtrl.create({
              title: 'Employee Details',
              message: "Name: " + data.employee_name,
              inputs: [
                {
                  name: 'employee_address', placeholder: data.address
                },
                {
                  name: 'contact', placeholder: data.contact
                },
                {
                  name: 'shift_time', placeholder: data.shift_time
                }
              ],
              buttons: [
                {
                  text: 'Cancel',
                  role: 'cancel',
                  handler: result => {
                    console.log('Cancel clicked');
                  }
                },
                {
                  text: 'Change',
                  handler: result => {
                    let postParams = {employee_name: data.employee_name, 
                      address: result.employee_address, 
                      contact : result.contact , 
                      shift_time : result.shift_time };

                    let headers = new Headers();
                    headers.append('Content-Type', 'application/json');

                    let url = Enums.APIURL.URL1;
                    let path = url.concat( "/api/eedit");

                    console.log(path);
                    console.log(postParams);

                    this.http.post(path, JSON.stringify(postParams), {headers: headers})
                    .subscribe(res =>{
                        console.log(res);

                        let alert2 = this.alertCtrl.create({
                        title: "Successful",
                        subTitle: "Details Changed",
                        buttons: ['Dismiss']
            });
            alert2.present();
                    }, (err) => {
                      console.log(err);
                    });
                }
              }
              ]
            });
            alert.present();
          });
    }
}
