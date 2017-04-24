import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Authenticator } from '../providers/authenticator';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserService {

  constructor(public auth: Authenticator, public http: Http) {
    console.log('Hello UserService Provider');
  }

  getFriends(){
      var observable = this.http.get('https://pt-b.herokuapp.com/a/user?token=' + this.auth.userToken);
      observable.subscribe(res => this.makeFriendsArray(res));
      //this.userName = username;
      return observable;
  }

  

  makeFriendsArray(res){
      console.log(JSON.parse(JSON.stringify(res)));
  }

  addFriend(friendID){
      var body = 'friends=' + friendID.toString(); 
      console.log('Body:' + 'friends=' + friendID.toString());  
      var observable = this.http.put('https://pt-b.herokuapp.com/a/user?token=' + this.auth.userToken, body);
      //observable.subscribe(res => console.log(JSON.parse(JSON.stringify(res))));
      return observable;
  }

  seekFriend(search){
      return this.http.get('https://pt-b.herokuapp.com/a/search' + '?username=' + search + '&token=' + this.auth.userToken);
  }

  getFriendsJson(res){
  		console.log(res);
  		var json = JSON.parse(JSON.stringify(res))._body;
  		var friendsArray = JSON.parse(json.replace(/&quot;/g,'"')).users;
      return friendsArray;
  }
}
