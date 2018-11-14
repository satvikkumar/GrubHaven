import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as Enums from '../../assets/apiconfig';
import { AlertController } from 'ionic-angular';
import { MakeReservationsPage } from '../make-reservations/make-reservations';



@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  availableRestaurants: any[];
  restaurant_name: string;
  reviews: any;
  custname: any;
  numTables: any;
  address: any;
  contact: any;
  cuisine: any;
  city: any;

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public http: Http) {

  }


  public search() {

    //TODO 
    //Read json of restaurants and populate below array
    let postParams = { name: this.restaurant_name };
    console.log(postParams);

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = Enums.APIURL.URL1;
    let path = url.concat("/api/search");
    console.log(path);
    console.log(postParams);


    this.http.post(path, JSON.stringify(postParams), { headers: headers })
      .subscribe(res => {

        if (JSON.stringify(res).length < 150) {
          let alert = this.alertCtrl.create({
            title: 'SORRY :(',
            subTitle: 'Restaurant Not Found',
            buttons: ['Dismiss']
          });
          alert.present();
        }

        else {
          let data = res.json();
          
          var cont = document.getElementsByClassName('r_name')[0];
          let lbl1 = "RESTAURANT NAME: "
          cont.innerHTML = lbl1.concat(data.name);
          console.log(cont.innerHTML)

          cont = document.getElementsByClassName('r_address')[0];
          let lbl2 = "ADDRESS: "
          cont.innerHTML = lbl2.concat(data.address);

          cont = document.getElementsByClassName('r_city')[0];
          let lbl3 = "CITY: "
          cont.innerHTML = lbl3.concat(data.city);

          cont = document.getElementsByClassName('r_contact')[0];
          let lbl4 = "CONTACT: "
          cont.innerHTML = lbl4.concat(data.contact);

          cont = document.getElementsByClassName('r_cuisine')[0];
          let lbl5 = "CUISINE: "
          cont.innerHTML = lbl5.concat(data.cuisine);

          this.numTables = data.numTables;

          document.getElementById('content').style.display = 'block';


          let path2 = url.concat("/api/viewReviewByRestaurant");

          console.log(path);

          this.http.post(path2, JSON.stringify(postParams), { headers: headers })
            .subscribe(res => {

              var data = res.json();
              this.reviews = [];
              this.custname = [];
              for (let i in data) {
                this.reviews.push(data[i].review);
                this.custname.push(data[i].customer_name);
              }
            }, (err) => {
              console.log(err);
            });

        }

      }, (err) => {
        console.log(err);
      });

  }

  public book() {
    this.navCtrl.push(MakeReservationsPage, { restaurant_name: this.restaurant_name, numTables: this.numTables });
    //Add the link to make reservations
  }

  /**
   * Navigate to the detail page for this item.
   */
}