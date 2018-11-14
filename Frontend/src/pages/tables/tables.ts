import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import * as Enums from '../../assets/apiconfig';

/**
 * Generated class for the TablesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tables',
  templateUrl: 'tables.html',
})
export class TablesPage {

  table_no: any;
  numTables : any;
  list: any;

  constructor( private storage: Storage,  public alertCtrl: AlertController, public loadingCtrl: LoadingController,public navCtrl: NavController,public http: Http ) {

  }

  ionViewDidLoad() {
    
    var r_name = '';
    

    this.storage.get('r_name').then((val) => {
      console.log(val);
        r_name = val
    let postParams = {name: r_name};
    console.log(postParams);
  
    let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = Enums.APIURL.URL1;
        let path = url.concat( "/api/search");
        console.log(path);
        console.log(postParams);


        this.http.post(path, JSON.stringify(postParams), {headers: headers})
          .subscribe(res => {

            let data = res.json(); 
            this.numTables = 0;
            this.numTables = data.numTables;
            this.table_no = []

            for (let i = 0; i < this.numTables; i++){
                this.table_no.push(i+1)
            }

        });
      });
  }

  public get_details($event,table)
  {
      var r_name = '';
      

      this.storage.get('r_name').then((val) => {
        console.log(val);
          r_name = val

      let postParams = {hotel_name: r_name, table_number : table };
      console.log(postParams);
      
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      
      let url = Enums.APIURL.URL1;
      let path = url.concat( "/api/showTableOrders");
      console.log(path);
      console.log(postParams);
      
      
      this.http.post(path, JSON.stringify(postParams), {headers: headers})
        .subscribe(res => {

          var data = res.json();
          console.log(data);

          if (data.length > 0)
          {

            this.list = "<table style='width:100%;'> <tr> <th>Dish</th> <th>Quantity</th> </tr>"
            let index = 0;

            for (let i = 0; i< data.length ; i++)
            {
              
                for (index = 0; index < data[i].dish.length; index++ ) 
                {
                  var element = "<tr> <td>" + data[i].dish[index] + "</td><td align:'right'>    " + data[i].quantity[index] + "</td></tr>"
                  this.list += element
                }

            }

            this.list += "</table>"
            let alert = this.alertCtrl.create({
            title: 'Pending Order',
            message: this.list,
            buttons: ['Ok']
            });
        
            alert.present();   
        }
        else{
          let alert = this.alertCtrl.create({
            title: 'No Pending Order',
            message: 'All orders for this table have been cleared',
            buttons: ['Ok']
            });

            alert.present();

        }

      });
    });
  }
}
