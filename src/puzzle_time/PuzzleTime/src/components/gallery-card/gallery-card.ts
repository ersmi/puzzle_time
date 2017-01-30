import { Component } from '@angular/core';
import { UserInfoComponent } from './../user-info/user-info';
import { PuzzleComponent } from './../puzzle/puzzle';

/*
  Generated class for the GalleryCard component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'gallery-card',
  templateUrl: 'gallery-card.html',
  entryComponents: [UserInfoComponent, PuzzleComponent]
})
export class GalleryCardComponent {

  text: string;

  // for puzzle overlay (goes in puzzle component) http://stackoverflow.com/questions/4288253/html5-canvas-100-width-height-of-viewport

  constructor() {
    //console.log('Hello GalleryCard Component');
    //this.text = 'Hello World';
  }

}
