import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Authenticator } from '../../providers/authenticator';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

	user:any;
	password:any;

  constructor(public navCtrl: NavController, public auth: Authenticator) {
  	this.navCtrl = navCtrl;
  }

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

  submit(){
  	var username = this.user;
  	var password = this.password;
  	console.log(this.user);
  	console.log(this.password);
  	var obs = this.auth.authenticate(username, password);
  	obs.subscribe(res => this.pushHome(res));
  }

  pushHome(res){
    this.auth.getUserId(res);
    if(this.auth.userToken !== ''){
      this.navCtrl.pop();
    }
  }
}
