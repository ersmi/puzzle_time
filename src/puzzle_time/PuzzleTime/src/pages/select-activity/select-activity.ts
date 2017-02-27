import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TimerPage } from '../timer/timer';
import { TimerCallCounter } from '../../providers/timer-call-counter';

/*
  Generated class for the SelectActivity page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-select-activity',
  templateUrl: 'select-activity.html'
})
export class SelectActivityPage {

  constructor(public navCtrl: NavController, public callCounter: TimerCallCounter) {}

  ionViewDidLoad() {
    console.log('Hello SelectActivityPage Page');
  }

  getPiece(){
  		this.navCtrl.push(TimerPage);
  }
  playGame(){
  		this.navCtrl.push(TimerPage);
  }
}
