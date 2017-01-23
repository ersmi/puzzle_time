import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

/*
  Generated class for the Submit page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-submit',
  templateUrl: 'submit.html',
  template: `<ion-header>
	<ion-navbar>
	    	<button ion-button menuToggle>
	    	  <ion-icon name="menu"></ion-icon>
	    	</button>
    		<ion-title>Submit</ion-title>
  		</ion-navbar>
	</ion-header>

	<ion-content padding>
		<button ion-button full (click) = "goToHome()">SUBMIT</button>
	</ion-content>`
})
export class SubmitPage {

  constructor(public navCtrl: NavController) {}

  goToHome(){
  	this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('Hello SubmitPage Page');
  }

}
