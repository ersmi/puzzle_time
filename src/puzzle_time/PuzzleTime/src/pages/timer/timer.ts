import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Timer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-timer',
  templateUrl: 'timer.html'
})
export class TimerPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TimerPage Page');
  }

}
