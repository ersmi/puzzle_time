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
  templateUrl: 'submit.html'
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
