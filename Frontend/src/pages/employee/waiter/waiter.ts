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

  ionViewDidLoad()
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


    public addWaiter(){

  var r_name = ''
  this.storage.get('r_name').then((val) => {
    console.log(val);
    r_name = val 
    let alert = this.alertCtrl.create({
    title: 'Employee Details',
    message: "Enter New Employee Details",
    inputs: [
      {
        name : 'employee_name', placeholder: "NAME"
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
            employee_type: "waiter", 
            address: result.employee_address, 
            contact : result.contact , 
            shift_time : result.shift_time 
          };

          let headers = new Headers();
          headers.append('Content-Type', 'application/json');

          let url = Enums.APIURL.URL1;
          let path = url.concat( "/api/addEmployee");

          this.http.post(path, JSON.stringify(postParams), {headers: headers})
          .subscribe(res =>{
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


  public remove(waiter){

    var r_name = '';
    this.storage.get('r_name').then((val) => {
      r_name = val


      let postParams = {
        hotel_name: r_name,
        employee_name: waiter,
        employee_type: "waiter", 
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

