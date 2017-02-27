import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TimerPage } from '../timer/timer';
import { ProfilePage } from '../profile/profile';
import { UploadPage } from '../upload/upload';
import { GalleryCardComponent } from './../../components/gallery-card/gallery-card';
import { TimerCallCounter } from '../../providers/timer-call-counter';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	  	selector: 'page-home',
	  	templateUrl: 'home.html',
      entryComponents: [GalleryCardComponent]
})

export class HomePage {
  constructor(public navCtrl: NavController) {
  	this.navCtrl = navCtrl;
  }

  goToTimer(){
  		this.navCtrl.push(TimerPage, {count: 0, isWork: true});
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
