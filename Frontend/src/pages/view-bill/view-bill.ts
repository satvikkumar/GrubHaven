import { MakePaytmPaymentPage } from './../make-paytm-payment/make-paytm-payment';
import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import * as Enums from '../../assets/apiconfig';
import { CustomerHomePage } from '../customer-home/customer-home';

/**
 * Generated class for the ViewBillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-bill',
  templateUrl: 'view-bill.html',
})
export class ViewBillPage {
  table_number : any;
  r_name: any;
  list: any;
  cost: any;
  quantity: any;
  subtotal : any;
  consolidated_list: any;
  consolidated_quantity :any;
  total : Number;

  constructor( public http: Http, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  
  ionViewDidLoad() {

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

            else {
              data = res.json();
              console.log(data)
              this.r_name = data.hotel_name;
              console.log(data.table_number);
              this.table_number = data.table_number;

              let postParams = {hotel_name: this.r_name, table_number : this.table_number};
    
              let headers = new Headers();
              headers.append('Content-Type', 'application/json');

              let url = Enums.APIURL.URL1;
              let path = url.concat( "/api/showBill");
              console.log(path);
              console.log(postParams);

              this.http.post(path, JSON.stringify(postParams), {headers: headers})
              .subscribe(res => {
                
                var data = res.json();
                console.log(data);
                
                this.list=[];
                this.quantity = [];
                this.cost = [];
                //console.log(data.length)
                for (let i = 0; i< data.length; i++)
                {
                  for (let j = 0; j< data[i].dish.length; j++)
                  {
                      this.list.push(data[i].dish[j]);
                      this.quantity.push(data[i].quantity[j]);
                  }
                }

                var temparray = new Set(this.list)
                this.consolidated_list = Array.from(temparray)
                this.consolidated_quantity = []

                for (let i = 0; i < this.consolidated_list.length; i++){
                  this.consolidated_quantity[i] = parseInt("0");
                  this.cost[i] = parseInt("0");
                }

                for (let i = 0; i < this.consolidated_list.length; i++){
                  for (let j = 0; j< this.list.length; j++){
                    if(this.list[j] == this.consolidated_list[i] ){
                      this.consolidated_quantity[i] += parseInt(this.quantity[j]);

                    }               //End of If condition
                  }                 //End of j loop
                }                   //End of i loop


                //GETTING MENU DATA
                let headers = new Headers();
                headers.append('Content-Type', 'application/json');

                let url = Enums.APIURL.URL1;
                let path = url.concat( "/api/viewMenu");


                this.http.post(path, JSON.stringify(postParams), {headers: headers})
                .subscribe(res => {
          
                  var data = res.json();
                  console.log(data.dishes)
                  for (let i = 0; i < this.consolidated_list.length; i++){
                    for (let j = 0; j< data.dishes.length; j++){
                      if(this.consolidated_list[i] == data.dishes[j].dish_name ){
                        this.cost[i] = this.cost[i] + (data.dishes[j].cost*this.consolidated_quantity[i]) 

                      }               //End of If condition
                    }                 //End of j loop
                  }                   //End of i loop

                this.total = 0;
                for (let i = 0; i < this.cost.length; i++){
                  this.total+= this.cost[i];
                }

              
                }, (err) => {
                    console.log(err);
                });

              }                     //End of result handler for post query for showBill
              , (err) => {
                console.log(err);
              });                 //End of post request for showBill

            }                     //End of else
          })                      //End of post request for OTPVerification
         }                         //End of handler for OTP
        }                           //End of confirm buttons list for OTP alert
      ]                             //End of array of buttons for OTP
    });
    alert.present();
  }

  public payment(){
    this.navCtrl.push(MakePaytmPaymentPage)
  }
}
