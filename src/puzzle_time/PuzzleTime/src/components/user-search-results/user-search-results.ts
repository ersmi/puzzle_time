import { Component } from '@angular/core';

/*
  Generated class for the UserSearchResults component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'user-search-results',
  templateUrl: 'user-search-results.html'
})
export class UserSearchResultsComponent {

  text: string;

  constructor() {
    console.log('Hello UserSearchResults Component');
    this.text = 'Hello World';
  }

}
