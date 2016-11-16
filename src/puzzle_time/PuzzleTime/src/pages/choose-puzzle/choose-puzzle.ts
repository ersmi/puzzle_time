import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ChoosePuzzle page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-choose-puzzle',
  templateUrl: 'choose-puzzle.html'
})
export class ChoosePuzzlePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ChoosePuzzlePage Page');
  }

}
