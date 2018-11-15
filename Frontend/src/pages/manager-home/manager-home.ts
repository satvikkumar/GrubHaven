import { Component } from '@angular/core';
import { IonicPage, NavController,LoadingController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';

import * as Enums from '../../assets/apiconfig';

/**
 * Generated class for the ManagerHomePage page.
 *a
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manager-home',
  templateUrl: 'manager-home.html',
})
export class ManagerHomePage {

  user: string;
  activeMenu: string = 'none';
  restaurant_name:string ='';
  paths:any;
  
  constructor(public menu: MenuController, public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams,private storage: Storage) {
	  
    this.user = navParams.get('username');
	console.log(this.user);
	
  }

	ionViewDidLoad() {
		
		console.log('ionViewDidLoad ManagerHomePage');
		
		this.storage.get('r_name').then((val) => {
			this.restaurant_name = val;
			console.log(this.restaurant_name);
			this.activeMenu = 'menurest';
			this.menu.enable(true, 'menurest');
			this.menu.enable(false, 'menucust');
			this.paths=[];
			var pathList = ['_populardishes','_inventory','_PeakHours','_sentimentvisualization'];
			var url = Enums.APIURL.URL1;
			var rname = "/" + this.restaurant_name;
			for (let i in pathList) {
				console.log('Setting :'+rname+' URL : '+url);
				let image_name = rname+pathList[i]+".png";
				let folder_path = rname+image_name;
				console.log(folder_path);
				let final_path = url+folder_path;
				console.log(final_path);
				this.paths.push(final_path);
				
			}	
			console.log(this.paths);
		});
	}
	
	genAnalytics() {
		let loading = this.loadingCtrl.create({
			content: 'Please wait...'
		});
		loading.present();
		loading.dismiss();
		
	}
}