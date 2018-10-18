import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { AlertController } from 'ionic-angular';

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

  constructor(  public alertCtrl: AlertController, public loadingCtrl: LoadingController,public navCtrl: NavController,public http: Http ) {

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
    console.log(chef);
    let postParams = {employee_name: chef};
  
    let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = Enums.APIURL.URL1;
        let path = url.concat( "/api/employee");
        console.log(path);
        console.log(postParams);


        this.http.post(path, JSON.stringify(postParams), {headers: headers})
          .subscribe(res => {
 
            console.log(res);
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
