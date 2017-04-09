import { Component } from '@angular/core';

/*
  Generated class for the HeaderTimer component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'header-timer',
  templateUrl: 'header-timer.html'
})
export class HeaderTimerComponent {

  text: string;

  constructor() {
    console.log('Hello HeaderTimer Component');
    this.text = 'Hello World';
  }

}
