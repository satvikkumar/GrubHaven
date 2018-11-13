import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';
import * as Enums from '../../assets/apiconfig';
import moment from 'moment'
import { Http, Headers } from '@angular/http';
import { AlertController } from 'ionic-angular';



/**
 * Generated class for the MakeReservationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-make-reservations',
  templateUrl: 'make-reservations.html',
})
export class MakeReservationsPage {

  restaurant_name = '';
  today = '';
  time= '';
  path = '';
  numTables = 0;
  tableInfo = [];
  isOneSelected=false;
  tableSelected = -1;
  contact_name="";
  contact_number="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private alertCtrl: AlertController) {
    this.restaurant_name = navParams.get('restaurant_name');
    this.numTables = navParams.get('numTables');
    var date = "2017-03-13";
    var time = "01:00";
    var timeAndDate = moment(date+' '+time).format();
    this.time = timeAndDate
    this.today = moment().format()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MakeReservationsPage');

    let url = Enums.APIURL.URL1;
    let rname = "/" + this.restaurant_name;
    let image_name = rname.concat(".jpg");
    let folder_path = rname.concat(image_name);

    this.path = url.concat(folder_path);
    console.log(this.path)
    console.log(this.numTables);
    this.getTableAvailability();
  }

  getTableAvailability() {
    this.isOneSelected = false;
    this.tableSelected = -1;
    this.tableInfo = []
    for(var i=0;i<this.numTables;i++){
      this.tableInfo.push({num:i+1, reserved:0})
    }
    let postParams = {
      hotel_name: this.restaurant_name,
      time: moment(this.time).hour(),
      date: moment(this.today).format("DDMMYYYY"),
      // date: "31102018",
    };

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = Enums.APIURL.URL1;
    let path = url.concat("/api/tables");
    console.log(path);
    console.log(postParams);

    this.http.post(path, JSON.stringify(postParams), {
        headers: headers
      })
      .subscribe(res => {
        console.log(res.json());
          res.json().forEach(element => {
            console.log(element)
            this.tableInfo[parseInt(element.table_number)-1].reserved = 1;
          });

          console.log(this.tableInfo);
          
          // res = JSON.parse(res.body)
          
 
        },
        (err) => {
          console.log(err);
        });
  }

  handleButtonClick(tableNumber) {
    console.log("SELECTED" + tableNumber);
    this.isOneSelected = true;
    this.tableSelected = tableNumber;
  }

  makeReservation() {
    let postParams = {
      hotel_name: this.restaurant_name,
      time: moment(this.time).hour(),
      date: moment(this.today).format("DDMMYYYY"),
      table_number: this.tableSelected,
      customer_name: this.contact_name, 
      contact: this.contact_number,

      // date: "31102018",
    };

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = Enums.APIURL.URL1;
    let path = url.concat("/api/makeReservation");
    console.log(path);
    console.log(postParams);

    this.http.post(path, JSON.stringify(postParams), {
        headers: headers
      })
      .subscribe(res => {
        console.log(res.json());
        

          console.log(this.tableInfo);
                    
          let alert2 = this.alertCtrl.create({
            title: "Success!",
            subTitle: "Your table has been reserved. Have a great meal. ",
            buttons: ['Dismiss']
          });
          alert2.present();

          this.navCtrl.pop();

          // this.navCtrl.push(CustomerHomePage);
        },
        (err) => {
          console.log(err);
        });
  }

}
