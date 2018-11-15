import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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
  rname: any;

  constructor(private storage: Storage, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public navCtrl: NavController, public http: Http) {

  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    var r_name = '';
    loading.present();
    this.storage.get('r_name').then((val) => {
      console.log(val);
      r_name = val

      let postParams = { employee_type: "chef", hotel_name: r_name };
      let headers = new Headers();

      headers.append('Content-Type', 'application/json');

      let url = Enums.APIURL.URL1;
      let path = url.concat("/api/list");

      this.http.post(path, JSON.stringify(postParams), { headers: headers })
        .subscribe(res => {

          var data = res.json();
          this.chefs = [];
          for (let i in data) {
            this.chefs.push(data[i].employee_name);

          }
          loading.dismiss();
        }, (err) => {
          console.log(err);
        });
    });
  }
  public get_details($event, chef) {
    let postParams = { employee_name: chef };

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = Enums.APIURL.URL1;
    let path = url.concat("/api/employee");


    this.http.post(path, JSON.stringify(postParams), { headers: headers })
      .subscribe(res => {

        let data = res.json();
        let alert = this.alertCtrl.create({
          title: 'Employee Details',
          message: "Name: " + data.employee_name,
          inputs: [
            {
              name: 'employee_address', placeholder: data.address, value : data.address
            },
            {
              name: 'contact', placeholder: data.contact, value : data.contact
            },
            {
              name: 'shift_time', placeholder: data.shift_time, value : data.shift_time
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
                let postParams = {
                  employee_name: data.employee_name,
                  address: result.employee_address,
                  contact: result.contact,
                  shift_time: result.shift_time
                };

                let headers = new Headers();
                headers.append('Content-Type', 'application/json');

                let url = Enums.APIURL.URL1;
                let path = url.concat("/api/eedit");


                this.http.post(path, JSON.stringify(postParams), { headers: headers })
                  .subscribe(res => {

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

  public addChef() {

    var r_name = ''
    this.storage.get('r_name').then((val) => {
      console.log(val);
      r_name = val
      let alert = this.alertCtrl.create({
        title: 'Employee Details',
        message: "Enter New Employee Details",
        inputs: [
          {
            name: 'employee_name', placeholder: "NAME"
          },
          {
            name: 'employee_address', placeholder: "ADDRESS"
          },
          {
            name: 'contact', placeholder: "CONTACT"
          },
          {
            name: 'shift_time', placeholder: "SHIFT TIME"
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
            text: 'Add',
            handler: result => {
              let postParams = {
                hotel_name: r_name,
                employee_name: result.employee_name,
                employee_type: "chef",
                address: result.employee_address,
                contact: result.contact,
                shift_time: result.shift_time
              };

              let headers = new Headers();
              headers.append('Content-Type', 'application/json');

              let url = Enums.APIURL.URL1;
              let path = url.concat("/api/addEmployee");

              this.http.post(path, JSON.stringify(postParams), { headers: headers })
                .subscribe(res => {
                  this.ionViewDidLoad()
                  let alert2 = this.alertCtrl.create({
                    title: "Successful",
                    subTitle: "Employee Added",
                    buttons: ['Dismiss']
                  });

                  alert2.present();
                }, (err) => {
                  console.log(err);
                });
            }
          }] //End of buttons list
      });
      alert.present();
    }); //End of Storage


  }//End of add function


  public remove(chef) {

    var r_name = '';
    this.storage.get('r_name').then((val) => {
      r_name = val


      let postParams = {
        hotel_name: r_name,
        employee_name: chef,
        employee_type: "chef",
      };
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      let url = Enums.APIURL.URL1;
      let path = url.concat("/api/removeEmp");


      this.http.post(path, JSON.stringify(postParams), { headers: headers })
        .subscribe(res => {

        }, (err) => {
          console.log(err);
        });

      this.ionViewDidLoad()
    });

  }
}

