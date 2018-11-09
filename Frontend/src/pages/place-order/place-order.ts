import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import * as Enums from '../../assets/apiconfig';
import { CustomerHomePage } from '../customer-home/customer-home';

/**
 * Generated class for the PlaceOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-place-order',
  templateUrl: 'place-order.html',
})
export class PlaceOrderPage {
  list2: any;
  list: any;
  quantity : any;
  orderedItems : any;
  searchValue : any;
  q : any;
  r_name : any;
  i_name: any;
  table_number : any;

  constructor( public http: Http, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaceOrderPage');
    this.q = [];
    this.orderedItems = [];
    this.list2=[];

    let alert = this.alertCtrl.create({
      title: 'Enter Reservation OTP',
      inputs: [{
              name: 'otp',
              placeholder : 'OTP'
      }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Continue',
          handler: data => {
              //console.log(data.quantity)
              let postParams = {OTP: data.otp};
    console.log(postParams);
  
    let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = Enums.APIURL.URL1;
        let path = url.concat( "/api/checkOTP");
        console.log(path);
        console.log(postParams);


        this.http.post(path, JSON.stringify(postParams), {headers: headers})
          .subscribe(res => {

            if (JSON.stringify(res).length < 150)
            {
            let alert = this.alertCtrl.create({
              title: 'Wrong OTP',
              subTitle: 'Try again',
              buttons: [
                {
                text: 'Cancel',
                handler: data => {
                    this.ionViewDidLoad()
                  }
                }
              ]
            });
            alert.present();
          }

          else
          {
            data = res.json();
            console.log(data)
            this.r_name = data.hotel_name;
            this.table_number = data.table_number;
          }

          })
          }
        }
      ]
    });
    alert.present();

  }

  public orderByDishName(){
    document.getElementById('dishname').style.display = 'block';
    document.getElementById('ingredient').style.display = 'none';
    let postParams = {hotel_name: this.r_name};
    console.log(postParams);
  
    let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = Enums.APIURL.URL1;
        let path = url.concat( "/api/viewMenu");
        console.log(path);
        console.log(postParams);

        this.http.post(path, JSON.stringify(postParams), {headers: headers})
        .subscribe(res => {
          
          var data = res.json();
          this.list=[];
            for (let i in data.dishes)
            {
                this.list.push(data.dishes[i].dish_name);
              }
            
          }, (err) => {
            console.log(err);
          });
  }

  public orderByIngredient(){
    document.getElementById('ingredient').style.display = 'block';
    document.getElementById('dishname').style.display = 'none';
    
  }


  public search(){
    console.log(this.i_name)
   let postParams = {hotel_name: this.r_name};
    console.log(postParams);
  
    let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = Enums.APIURL.URL1;
        let path = url.concat( "/api/viewMenu");
        console.log(path);
        console.log(postParams);

        this.http.post(path, JSON.stringify(postParams), {headers: headers})
        .subscribe(res => {
          
          var data = res.json();
          this.list2=[];
          this.list=[];
          this.searchValue = this.i_name;
            for (let i in data.dishes)
            {
              if(data.dishes[i].ingr_1 == this.searchValue || data.dishes[i].ingr_2 == this.searchValue || data.dishes[i].ingr_3 == this.searchValue  )
              {
                this.list2.push(data.dishes[i].dish_name);
              }
            }
            
          }, (err) => {
            console.log(err);
          });
  }

  public addItem(name){
    console.log(name)
    if (!this.orderedItems.includes(name))
    {
    let alert = this.alertCtrl.create({
      title: 'Enter the quantity',
      inputs: [{
              name: 'quantity',
              placeholder : 'Quantity'
      }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Continue',
          handler: data => {
              //console.log(data.quantity)
              this.quantity = data.quantity;
              this.orderedItems.push(name);
              this.q.push(this.quantity);
          }
        }
      ]
    });
    alert.present();
  }
  else{
    let alert = this.alertCtrl.create({
      title: 'Already Selected',
      subTitle: 'This item is already selected, You can modify the quantity in your cart',
      buttons: ['Dismiss']
    });
    alert.present();
  }

    
  } 

public modify(name)
{
  let alert = this.alertCtrl.create({
    title: 'Enter new quantity',
    inputs: [{
            name: 'quantity',
            placeholder : 'Quantity'
    }],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Continue',
        handler: data => {
            var i = 0;
            for (i = 0; i < this.orderedItems.length ; i++)
            {
              if (this.orderedItems[i] == name)
              {
                 this.q[i] = data.quantity
              }
            }
        }
      }
    ]
  });
  alert.present();

}

public remove(name){
  var i = 0;
    for (i = 0; i < this.orderedItems.length ; i++)
    {
        if (this.orderedItems[i] == name)
        {
           this.orderedItems.splice(i,1);
           this.q.splice(i,1);
        }
    }


}

public placeOrder(){
  if (this.orderedItems.length == 0)
  {
    let alert = this.alertCtrl.create({
      title: 'Sorry :(',
      subTitle: 'Please populate your cart',
      buttons: ['Dismiss']
    });
    alert.present();
  }
  else{


    let postParams = {hotel_name: this.r_name, table_number : this.table_number, dish: this.orderedItems , quantity: this.q};
    console.log(postParams);
  
    let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = Enums.APIURL.URL1;
        let path = url.concat( "/api/addOrder");
        console.log(path);
        console.log(postParams);

        this.http.post(path, JSON.stringify(postParams), {headers: headers})
        .subscribe(res => {

          let alert = this.alertCtrl.create({
            title: 'Order Placed :)',
            subTitle: 'Enjoy your food',
            buttons: [
              {
              text: 'Continue',
              handler: data => {
                  this.navCtrl.push(CustomerHomePage)
                }
              }
            ]
          });
          alert.present();


        });

  }
}

}