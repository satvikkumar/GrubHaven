import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SearchPage } from '../search/search'
import { Auth } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient ) { }

  /**
   * Perform a service for the proper items.
   */
  search() {

    let credentials = {name:this.restaurant_name}
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let token_1 = this.storage.get('token')
    headers.append('jwt',token_1)

    this.http.post('http://localhost:8100/api/auth/restaurant_list', JSON.stringify(credentials), {headers: headers})
      .subscribe(res => {

        let data = res.json();
        console.log(data);
        //this.token = data.token;

        /*this.storage.set('token', data.token);*/
        resolve(data);

        resolve(res.json());
      }, (err) => {
        reject(err);
      });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

}
