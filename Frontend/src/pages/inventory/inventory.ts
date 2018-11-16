import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import * as Enums from '../../assets/apiconfig';

/**
 * Generated class for the InventoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inventory',
  templateUrl: 'inventory.html',
})
export class InventoryPage {


  items: any;
  quantity: any;
  supplier: any;
  rname: any;

  constructor(private storage: Storage, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public navCtrl: NavController, public http: Http) {

  }

  ionViewDidLoad() { //console.log("HEll oh world?");
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    var r_name = '';
    loading.present();
    this.storage.get('r_name').then((val) => {
      console.log(val);
      r_name = val

      let postParams = { hotel_name: r_name };
      let headers = new Headers();

      headers.append('Content-Type', 'application/json');

      let url = Enums.APIURL.URL1;
      let path = url.concat("/api/listItems");

      this.http.post(path, JSON.stringify(postParams), { headers: headers })
        .subscribe(res => {

          var data = res.json();
          //console.log(data);
          console.log(data.ing_name)
          this.items = [];
          this.quantity = [];
          this.supplier = [];
          for (let i in data.inventory) {
            this.items.push(data.inventory[i].ing_name);
            this.quantity.push(data.inventory[i].ing_quant);
            this.supplier.push(data.inventory[i].ing_supplier);
            //console.log(data.inventory[i].ing_name)
            console.log(this.items)

          }
          loading.dismiss();
        }, (err) => {
          console.log(err);
        });
    });
  }
  public get_details($event, item) {
    var r_name = '';


    this.storage.get('r_name').then((val) => {
      console.log(val);
      r_name = val

      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i] == item) {
          let alert = this.alertCtrl.create({
            title: 'Item Details',
            message: "Name: " + this.items[i],
            inputs: [
              {
                name: 'new_quantity', placeholder: this.quantity[i], value : this.quantity[i]
              },
              {
                name: 'new_supplier', placeholder: this.supplier[i], value : this.supplier[i]
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
                    hotel_name: r_name,
                    ing_name: this.items[i],
                    ing_quant: result.new_quantity,
                    ing_supplier: result.new_supplier
                  };

                  let headers = new Headers();
                  headers.append('Content-Type', 'application/json');

                  let url = Enums.APIURL.URL1;
                  let path = url.concat("/api/iEdit");


                  this.http.post(path, JSON.stringify(postParams), { headers: headers })
                    .subscribe(res => {
                      this.ionViewDidLoad()

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
        }
      }
    });
  }

  public addItem() {

    var r_name = ''
    this.storage.get('r_name').then((val) => {
      console.log(val);
      r_name = val
      let alert = this.alertCtrl.create({
        title: 'Ingredient Details',
        message: "Enter New Ingredient Details",
        inputs: [
          {
            name: 'name', placeholder: "NAME"
          },
          {
            name: 'quantity', placeholder: "QUANTITY"
          },
          {
            name: 'supplier', placeholder: "SUPPLIER"
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
                ing_name: result.name,
                ing_quant: result.quantity,
                ing_supplier: result.supplier
              };

              let headers = new Headers();
              headers.append('Content-Type', 'application/json');

              let url = Enums.APIURL.URL1;
              let path = url.concat("/api/addItem");

              this.http.post(path, JSON.stringify(postParams), { headers: headers })
                .subscribe(res => {
                  this.ionViewDidLoad()
                  let alert2 = this.alertCtrl.create({
                    title: "Successful",
                    subTitle: "Ingredient Added",
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


  public remove(item) {

    var r_name = '';
    this.storage.get('r_name').then((val) => {
      r_name = val


      let postParams = {
        hotel_name: r_name,
        ing_name: item
      };
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      let url = Enums.APIURL.URL1;
      let path = url.concat("/api/removeItem");


      this.http.post(path, JSON.stringify(postParams), { headers: headers })
        .subscribe(res => {

        }, (err) => {
          console.log(err);
        });

      this.ionViewDidLoad()
    });

  }
}

