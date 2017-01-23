import { Component } from '@angular/core';

/*
  Generated class for the Gallery component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'gallery',
  templateUrl: 'gallery.html'
})
export class GalleryComponent {

  text: string;

  constructor() {
    console.log('Hello Gallery Component');
    this.text = 'Hello World';
  }

}
