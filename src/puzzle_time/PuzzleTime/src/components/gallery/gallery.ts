import { Component } from '@angular/core';
import { GalleryCardComponent } from './../gallery-card/gallery-card';


/*
  Generated class for the Gallery component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'gallery',
  templateUrl: 'gallery.html',
  entryComponents: [GalleryCardComponent]
})
export class GalleryComponent {

  //text: string;

  constructor() {
  }

}
