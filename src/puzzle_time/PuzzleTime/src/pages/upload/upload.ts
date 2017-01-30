import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SubmitPage } from '../submit/submit';

/*
  Generated class for the Upload page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html'
})
export class UploadPage {

  constructor(public navCtrl: NavController) {
  		this.navCtrl = navCtrl;
  }

  goToSubmit(){
  	this.navCtrl.push(SubmitPage);
  }

  ionViewDidLoad() {
    console.log('Hello UploadPage Page');
  }

}
