import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GalleryCardComponent } from './../../components/gallery-card/gallery-card';
/*
  Generated class for the FriendList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-friend-list',
  templateUrl: 'friend-list.html',
  entryComponents: [GalleryCardComponent]
})
export class FriendListPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello FriendListPage Page');
  }

}
