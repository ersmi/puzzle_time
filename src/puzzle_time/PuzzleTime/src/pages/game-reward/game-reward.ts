import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PuzzleService } from '../../providers/puzzle-service';
import { GameService } from '../../providers/game-service';
import { GalleryComponent } from './../../components/gallery/gallery';
import { TimerPage } from '../timer/timer';
import { HomePage } from '../home/home';


/*
  Generated class for the GameReward page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-game-reward',
  templateUrl: 'game-reward.html',
  entryComponents: [GalleryComponent]
})
export class GameRewardPage {

  constructor(public navCtrl: NavController, public puzzleService: PuzzleService, public gameService: GameService) {
    //this.puzzleService.getUserPuzzleSet();
  }

  ionViewDidLoad() {
    console.log('Hello GameRewardPage Page');
  }

  goToTimer(){
  		this.navCtrl.setPages([TimerPage]);
  }

  goToHome(){
      this.navCtrl.setPages([HomePage]);
  }

  //get top score from game service
  //display number of awarded pieces and highlight them
  //link to timer page
  //link to home page

}
