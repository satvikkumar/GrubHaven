import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import * as Enums from '../../assets/apiconfig';
import { AlertController } from 'ionic-angular';


//import { Auth } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'



})
export class SearchPage {

  availableRestaurants: any []; 
  restaurant_name:string;

  constructor(private alertCtrl: AlertController , public navCtrl: NavController, public navParams: NavParams, public http: Http ) { 
    
  }

  
  public search() {

    //TODO 
    //Read json of restaurants and populate below array
    let postParams = {name: this.restaurant_name};
  
    let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = Enums.APIURL.URL1;
        let path = url.concat( "/api/search");
        console.log(path);
        console.log(postParams);


        this.http.post(path, JSON.stringify(postParams), {headers: headers})
          .subscribe(res => {
 
            console.log(res);
            //let data = res.json();
            console.log(JSON.stringify(res).length)
            if (JSON.stringify(res).length < 150)
            {
              let alert = this.alertCtrl.create({
                title: 'SORRY :(',
                subTitle: 'Restaurant Not Found',
                buttons: ['Dismiss']
              });
              alert.present();
            }
            
        else{
          let data = res.json();
            var cont = document.getElementsByClassName('r_name')[0];
         let lbl1 = "RESTAURANT NAME: " 
         cont.innerHTML = lbl1.concat(data.name);

         var cont = document.getElementsByClassName('r_address')[0];
         let lbl2 = "ADDRESS: "
         cont.innerHTML = lbl2.concat(data.address);

         var cont = document.getElementsByClassName('r_city')[0];
         let lbl3 = "CITY: "
         cont.innerHTML = lbl3.concat(data.city);

         var cont = document.getElementsByClassName('r_contact')[0];
         let lbl4 = "CONTACT: "
         cont.innerHTML = lbl4.concat(data.contact);
         
         var cont = document.getElementsByClassName('r_cuisine')[0];
         let lbl5 = "CUISINE: "
         cont.innerHTML = lbl5.concat(data.cuisine);

         document.getElementById('content').style.display = 'block';}
 
          }, (err) => {
            console.log(err);
          });

  }

  public book()
  {
      //Add the link to make reservations
  }

  /**
   * Navigate to the detail page for this item.
   */
}