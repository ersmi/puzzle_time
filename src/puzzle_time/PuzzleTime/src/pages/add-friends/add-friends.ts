import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../providers/user-service';
import { UserSearchResultsComponent } from './../../components/user-search-results/user-search-results';

/*
  Generated class for the AddFriends page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-friends',
  templateUrl: 'add-friends.html'
})
export class AddFriendsPage {


  public potentialFriends;
  public addNew = false;
  public newItem;
  public friendString = '';
  friend:any;

  constructor(public navCtrl: NavController, public uServ: UserService) {

  }

  ionViewDidLoad() {
    console.log('Hello AddFriendsPage Page');
  }

  search(){
    this.uServ.seekFriend(this.friend).subscribe(res => this.populateFriends(res));
  }

  populateFriends(res){
    this.potentialFriends = this.uServ.getFriendsJson(res);
    console.log(this.potentialFriends);
    //$scope.genFriends = 'FRIEND';
    
  }

}
