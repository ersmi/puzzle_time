import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GalleryComponent } from './../../components/gallery/gallery';
import { PuzzleService } from '../../providers/puzzle-service';
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

  constructor(public navCtrl: NavController, public puzz: PuzzleService) {
      var friends = [4];
      this.puzz.addFriend(friends);
      var obs = this.puzz.getFriends();
      //obs.subscribe(res => populateFriends());
  }

  ionViewDidLoad() {
    console.log('Hello FriendListPage Page');
  }

  populateFriends(){
      console.log('Populate Friends initiated.');
  }

  goToAddFriends(){
      //this.navCtrl.push();
  }

}
