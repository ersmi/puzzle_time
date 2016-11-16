import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the GameInterface page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-game-interface',
  templateUrl: 'game-interface.html'
})
export class GameInterfacePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello GameInterfacePage Page');
  }

}
