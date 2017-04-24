import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AnimalPhaserGame } from '../games/animal-phaser-game';

/*
  Generated class for the GameService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GameService {
  public currentGameId:string;
  public currentScorePercent:number;
  public currentScoreActual:string
  constructor() {
  }

  getGameList(){
    return ["animal memory"];
  }

  getGame(id:string){
    switch(id){
      case "animal memory":
        return AnimalPhaserGame;
    }
  }

  setCurrentGame(id:string){
    this.currentGameId = id;
  }

  startGame(){
    this.currentScorePercent = 0;
    this.currentScoreActual = "";
  }

  publishScore(percent:number, actual:string){ //where percent is a number between 0 and 1 and actual is the score to display
    if(percent > this.currentScorePercent){
      this.currentScorePercent = percent;
      this.currentScoreActual = actual;
    }
  }

  getFinalScore(){
    return this.currentScorePercent;
  }

  finishGame(){

  }

  /*loadGame(){ //saves game state data to local storage
    //return new Promise();
  }

  saveGame(){

  }*/

}
