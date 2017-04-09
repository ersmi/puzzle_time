import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PuzzleService } from '../../providers/puzzle-service';
import { GameService } from '../../providers/game-service';


/*
  Generated class for the GameReward page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-game-reward',
  templateUrl: 'game-reward.html'
})
export class GameRewardPage {

  constructor(public navCtrl: NavController, public puzzleService: PuzzleService, public gameService: GameService) {
    this.puzzleService.getUserPuzzleSet();
  }

  ionViewDidLoad() {
    console.log('Hello GameRewardPage Page');
  }

  //get top score from game service
  //display ***** ranking and award pieces from puzzle service
  //link to timer page
  //link to home page

}
