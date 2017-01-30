import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { TimeComponent } from './../../components/time/time';

/*
  Generated class for the Timer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-timer',
  templateUrl: 'timer.html',
  entryComponents: [TimeComponent]
})
export class TimerPage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('Hello TimerPage Page');
  }

  startTime(){
  		
  }
}
