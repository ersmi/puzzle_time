import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Authenticator } from '../../providers/authenticator';

/*
  Generated class for the UserInfo component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'user-info',
  templateUrl: 'user-info.html'
})
export class UserInfoComponent {

  public userName = '';

  text: string;

  constructor(public auth: Authenticator, public http: Http) {
    //console.log('Hello UserInfo Component');
    //this.text = 'Hello World';
  }

  getUserInfo(){
      
  }

}
