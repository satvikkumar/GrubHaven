import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import * as Enums from '../../assets/apiconfig';

/**
 * Generated class for the ManageMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-manage-menu',
  templateUrl: 'manage-menu.html',
})

export class ManageMenuPage {


  food: any;
  ingr_1 : any;
  ingr_2 : any;
  ingr_3 : any;
  cost : any;
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
      let path = url.concat("/api/listMenu");

      this.http.post(path, JSON.stringify(postParams), { headers: headers })
        .subscribe(res => {

          
		  var t_data = res.text();
		  if(t_data.length)
		  {
			  var data=res.json();
			  
			  
          console.log(data);
          this.food = [];
          this.ingr_1 = [];
          this.ingr_2 = [];
          this.ingr_3 = [];
          this.cost = [];

          for (let i in data.dishes) {
            this.food.push(data.dishes[i].dish_name);
            this.ingr_1.push(data.dishes[i].ingr_1);
            this.ingr_2.push(data.dishes[i].ingr_2);
            this.ingr_3.push(data.dishes[i].ingr_3);
            this.cost.push(data.dishes[i].cost);

          }
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

      for (let i = 0; i < this.food.length; i++) {
        if (this.food[i] == item) {
          let alert = this.alertCtrl.create({
            title: 'Menu Item Details',
            message: "Name: " + this.food[i],
            inputs: [
              {
                name: 'new_ingr1', placeholder: this.ingr_1[i], value : this.ingr_1[i]
              },
              {
                name: 'new_ingr2', placeholder: this.ingr_2[i], value : this.ingr_2[i]
              },
              {
                name: 'new_ingr3', placeholder: this.ingr_3[i], value : this.ingr_3[i]
              },
              {
                name: 'new_cost', placeholder: this.cost[i], value : this.cost[i]
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
                    dish_name: this.food[i],
                    ingr_1: result.new_ingr1,
                    ingr_2: result.new_ingr2,
                    ingr_3: result.new_ingr3,
                    cost: parseInt(result.new_cost)
                  };

                  console.log(postParams);

                  let headers = new Headers();
                  headers.append('Content-Type', 'application/json');

                  let url = Enums.APIURL.URL1;
                  let path = url.concat("/api/menuEdit");


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
            name: 'ingr1', placeholder: "INGREDIENT 1"
          },
          {
            name: 'ingr2', placeholder: "INGREDIENT 2"
          },
          {
            name: 'ingr3', placeholder: "INGREDIENT 3"
          },
          {
            name: 'cost', placeholder: "COST"
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
                dish_name: result.name,
                ingr_1: result.ingr1,
                ingr_2: result.ingr2,
                ingr_3: result.ingr3,
                cost: parseInt(result.cost)
              };

              console.log(postParams)

              let headers = new Headers();
              headers.append('Content-Type', 'application/json');

              let url = Enums.APIURL.URL1;
              let path = url.concat("/api/addMenuItem");

              this.http.post(path, JSON.stringify(postParams), { headers: headers })
                .subscribe(res => {
                  this.ionViewDidLoad()
                  let alert2 = this.alertCtrl.create({
                    title: "Successful",
                    subTitle: "Dish Added to Menu",
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
        dish_name: item
      };
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      let url = Enums.APIURL.URL1;
      let path = url.concat("/api/removeMenuItem");


      this.http.post(path, JSON.stringify(postParams), { headers: headers })
        .subscribe(res => {

        }, (err) => {
          console.log(err);
        });

      this.ionViewDidLoad()
    });

  }
}
