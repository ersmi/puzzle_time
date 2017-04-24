import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Authenticator provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Authenticator {

  public userToken = '';

  public userName = '';

  public userId;

  public isAuthenticated = false;

  constructor(public http: Http) {
    //console.log('Hello Authenticator Provider');
  }

  authenticate(username, password){
    var body = new FormData();
    body.append('username', username);
    body.append('password', password);
    try{
      var observable = this.http.post('https://pt-b.herokuapp.com/a/login', body);
      this.userName = username;
      return observable;
    } catch (e){
      console.log("Encountered error:" + e.message);
    }
  }

  getUserId(res1){
      this.userToken = JSON.parse(JSON.stringify(res1))._body;
      var observable = this.http.get('https://pt-b.herokuapp.com/a/login' + '?token=' + this.userToken);
      observable.subscribe(res => this.userId = JSON.parse(JSON.stringify(res))._body);
      this.testThingy();
  }

  testThingy(){
      var observable = this.http.get('https://pt-b.herokuapp.com/a/login' + '?userid=6&'+ 'token=' + this.userToken);
      observable.subscribe(res => console.log(JSON.parse(JSON.stringify(res))._body));
      observable.subscribe(res => console.log(JSON.parse(JSON.parse(JSON.stringify(res))._body).puzzles));
  }
}
