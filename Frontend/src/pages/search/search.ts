import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import * as Enums from '../../assets/apiconfig';
//import { Auth } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'



})
export class SearchPage {

  availableRestaurants: any []; 
  restaurant_name:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient ) { }

  
  public search() {

    //TODO 
    //Read json of restaurants and populate below array
    let postParams = {name: this.restaurant_name};
    var header = { "headers": {"Content-Type": "application/json"} };
  
    console.log(postParams);
    let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = Enums.APIURL.URL1;
        let path = url.concat( "/api/search");
        console.log(postParams);


       /* this.http.post(path, JSON.stringify(postParams), {headers: headers})
          .subscribe(res => {
 
            console.log(data);
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

         document.getElementById('content').style.display = 'block';
 
          }, (err) => {
            console.log(err);
          });*/

         var cont = document.getElementsByClassName('r_name')[0];
         let lbl1 = "RESTAURANT NAME: " 
         cont.innerHTML = lbl1.concat('REST1');

         var cont = document.getElementsByClassName('r_address')[0];
         let lbl2 = "ADDRESS: "
         cont.innerHTML = lbl2.concat('banashankari');

         var cont = document.getElementsByClassName('r_city')[0];
         let lbl3 = "CITY: "
         cont.innerHTML = lbl3.concat('bangalore');

         var cont = document.getElementsByClassName('r_contact')[0];
         let lbl4 = "CONTACT: "
         cont.innerHTML = lbl4.concat('911');
         
         var cont = document.getElementsByClassName('r_cuisine')[0];
         let lbl5 = "CUISINE: "
         cont.innerHTML = lbl5.concat('indian');

         document.getElementById('content').style.display = 'block';
  }

  public book()
  {
      //Add the 
  }

  /**
   * Navigate to the detail page for this item.
   */
}