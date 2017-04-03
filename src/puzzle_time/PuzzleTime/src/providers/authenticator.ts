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
      observable.subscribe(res => this.userToken = JSON.parse(JSON.stringify(res))._body);
      return observable;
    } catch (e){
      console.log("Encountered error:" + e.message);
    }
  }

}