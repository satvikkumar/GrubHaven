import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
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
  cost : any;
  cost2: any;
  public show:boolean = false;
  public buttonName:any = 'Show';

  constructor(public actionSheetCtrl: ActionSheetController, public http: Http, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewCanEnter() {
    this.q = [];
    this.orderedItems = [];
    this.list2=[];
    this.list = [];
    let alert = this.alertCtrl.create({
      title: 'Enter Reservation OTP',
      inputs: [{
              name: 'otp',
              placeholder : 'OTP'
      }],
      enableBackdropDismiss: false,
      buttons: [
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

        if (data.otp = ''){
          let alert = this.alertCtrl.create({
            title: 'Wrong OTP',
            subTitle: 'Try again',
            buttons: [
              {
              text: 'Cancel',
              handler: data => {
                this.navCtrl.push(CustomerHomePage)
                }
              }
            ]
          });
          alert.present();

        }


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
                  this.navCtrl.push(CustomerHomePage)
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
  toggle() {
    console.log("clicked");
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }


  public orderByDishName(){

    document.getElementById('ingredient').style.display = 'none';
    document.getElementById('dishname').style.display = 'block';
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
          this.list2 = [];
          this.list=[];
          this.cost = [];
            for (let i in data.dishes)
            {
                this.list.push(data.dishes[i].dish_name);
                this.cost.push(data.dishes[i].cost);
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
       let postParams = {hotel_name: this.r_name};
    
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
          this.cost2 = [];
          this.searchValue = this.i_name;
            for (let i in data.dishes)
            {
              if(data.dishes[i].ingr_1.toLowerCase() == this.searchValue.toLowerCase() || ( data.dishes[i].ingr_2 !== undefined && data.dishes[i].ingr_2.toLowerCase() == this.searchValue.toLowerCase()) || ( data.dishes[i].ingr_3 !== undefined && data.dishes[i].ingr_3.toLowerCase() == this.searchValue.toLowerCase()))
              {
                this.list2.push(data.dishes[i].dish_name);
                this.cost2.push(data.dishes[i].cost);
              }
            }
            
          }, (err) => {
            console.log(err);
          });
  }

  public addItem(name){
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
          role: 'cancel',
        },
        {
          text: 'Continue',
          handler: data => {
              //console.log(data.quantity)
              if (parseInt(data.quantity) != data.quantity)
              {
                let alert = this.alertCtrl.create({
                  title: 'Quantity Wrong',
                  subTitle: 'The quantity you entered is not a number',
                  buttons: ['Dismiss']
                });
                alert.present();
              }
              else
              {
                this.quantity = data.quantity;
                this.orderedItems.push(name);
                this.q.push(this.quantity);
              }
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
          if (parseInt(data.quantity) != data.quantity)
          {
            let alert = this.alertCtrl.create({
              title: 'Quantity Wrong',
              subTitle: 'The quantity you entered is not a number',
              buttons: ['Dismiss']
            });
            alert.present();
          }
          else
          {
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
                  this.navCtrl.setRoot(CustomerHomePage)
                }
              }
            ]
          });
          alert.present();


        });

  }
}
}
