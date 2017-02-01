import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TimeComponent } from './../../components/time/time';
import { GalleryComponent } from './../../components/gallery/gallery';


/*
  Generated class for the Timer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-timer',
  templateUrl: 'timer.html',
  entryComponents: [TimeComponent, GalleryComponent]
})
export class TimerPage {

  constructor(public navCtrl: NavController) {
  	this.navCtrl = navCtrl;
  }

  ionViewDidLoad() {
    console.log('Hello TimerPage Page');
  }

}
