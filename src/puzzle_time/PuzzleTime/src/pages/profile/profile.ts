import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FriendListPage } from '../friend-list/friend-list';
import { GalleryComponent } from './../../components/gallery/gallery';

/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  entryComponents: [GalleryComponent]
})
export class ProfilePage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('Hello ProfilePage Page');
  }

  goToFriends(){
  	this.navCtrl.push(FriendListPage);
  }

}
