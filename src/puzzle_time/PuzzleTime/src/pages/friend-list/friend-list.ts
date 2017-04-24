import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GalleryComponent } from './../../components/gallery/gallery';
import { UserService } from '../../providers/user-service';
import { AddFriendsPage } from '../add-friends/add-friends';

/*
  Generated class for the FriendList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-friend-list',
  templateUrl: 'friend-list.html',
  entryComponents: [GalleryComponent]
})
export class FriendListPage {

  constructor(public navCtrl: NavController, public uServ: UserService) {
      var obs = this.uServ.getFriends();
      obs.subscribe(res => this.populateFriends());
  }

  ionViewDidLoad() {
    console.log('Hello FriendListPage Page');
  }

  populateFriends(){
      console.log('Populate Friends initiated.');
  }

  goToAddFriends(){
      this.navCtrl.push(AddFriendsPage);
  }

}
