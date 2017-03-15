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

  constructor() {
  }

  getGameList(){

  }

  getGame(id:String){
    switch(id){
      case "animal":
        return AnimalPhaserGame;
    }
  }

}
