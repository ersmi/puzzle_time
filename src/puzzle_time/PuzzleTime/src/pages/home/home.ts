import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TimerPage } from '../timer/timer';
import { ProfilePage } from '../profile/profile';
import { UploadPage } from '../upload/upload';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	  	selector: 'page-home',
	  	templateUrl: 'home.html',
	  	template: `<ion-header>
	<ion-navbar>
	    	<button ion-button menuToggle>
	    	  <ion-icon name="menu"></ion-icon>
	    	</button>
    		<ion-title>Home</ion-title>
  		</ion-navbar>
	</ion-header>

	<ion-content padding>
		<button ion-button full (click) = "goToTimer()" >START</button>		
		<button ion-button full (click) = "goToProfile()">PROFILE</button>
		<button ion-button full (click) = "goToUpload()">UPLOAD</button>
	</ion-content>`
})

export class HomePage {
  constructor(public navCtrl: NavController) {
  	this.navCtrl = navCtrl;
  }

  goToTimer(){
  		this.navCtrl.push(TimerPage);
  }

  goToProfile(){
  		this.navCtrl.push(ProfilePage);
  }

  goToUpload(){
  		this.navCtrl.push(UploadPage);
  }

  ionViewDidLoad() {
    console.log('Hello HomePage Page');
  }

}
