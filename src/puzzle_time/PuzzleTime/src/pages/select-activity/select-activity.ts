import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TimerPage } from '../timer/timer';
import { TimerCallCounter } from '../../providers/timer-call-counter';
import { GameService } from '../../providers/game-service';
import { GameInterfacePage } from '../game-interface/game-interface';

/*
  Generated class for the SelectActivity page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-select-activity',
  templateUrl: 'select-activity.html'
})
export class SelectActivityPage {
  public gameList:Array<string>;
  constructor(public navCtrl: NavController, public callCounter: TimerCallCounter, public gameService:GameService) {
    this.gameList = gameService.getGameList();
  }

  ionViewDidLoad() {
    console.log('Hello SelectActivityPage Page');
  }

  getPiece(){
  		this.navCtrl.popToRoot();
  }
  startGame(id:string){
    this.gameService.setCurrentGame(id);
    this.navCtrl.setPages([GameInterfacePage]);
  }
}
