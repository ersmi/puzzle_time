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
  public picNum = "";
  public left = 1;
  public right = 17;

  constructor() {
    this.picNum = "1/17";
  }

  loadSet(userId:string = null){
    if(userId == null){ //load own user puzzles

    } else { 

    }
  }

  goLeft(){
    this.left--;
    if(this.left < 1){
      this.left = this.right;
    }
    this.picNum = this.left.toString() + "/" + this.right.toString();
  }

  goRight(){
    this.left++;
    if(this.left > this.right){
      this.left = 1;
    }
    this.picNum = this.left.toString() + "/" + this.right.toString();
  }

}
