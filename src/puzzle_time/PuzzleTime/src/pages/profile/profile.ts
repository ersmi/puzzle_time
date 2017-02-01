import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FriendListPage } from '../friend-list/friend-list';
import { GalleryCardComponent } from './../../components/gallery-card/gallery-card';

/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  entryComponents: [GalleryCardComponent]
})
export class ProfilePage {
  public picNum = "";
  public left = 1;
  public right = 17;

  constructor(public navCtrl: NavController) {
    this.picNum = "1/17";
  }

  ionViewDidLoad() {
    console.log('Hello ProfilePage Page');
  }

  goLeft(){
    this.left--;
    if(this.left < 1){
      this.left = this.right;
    }
    this.picNum = this.left.toString() + "/" + this.right.toString();
  }

  goRight(){
    this.left++;
    if(this.left > this.right){
      this.left = 1;
    }
    this.picNum = this.left.toString() + "/" + this.right.toString();
  }

  goToFriends(){
  	this.navCtrl.push(FriendListPage);
  }

}
