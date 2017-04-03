import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GameService } from '../../providers/game-service';
import * as Phaser from 'phaser-ce';

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
  //public game;
  public game;
  constructor(public navCtrl: NavController, public gameService: GameService) {}

  ionViewDidLoad() {
    console.log('Hello GameInterfacePage Pages');
  }

  //todo:
  //GameService - get list of games,
  //      load chosen game code via promise
  //GameInterfacePage - abstract phaser calls to loaded game
  //      register listeners for GameService
  //BasePhaserGame - define defaults for games, set up mouse listeners, signals for game end, game save, game load, game score
  //PetsPhaserGame - game logic

  ionViewDidEnter(){
    let holder = document.getElementById("holder");
    let slot = document.getElementById("phaserSlot");
    let game = new (this.gameService.getGame("animal"))();
    game.setPhaser(new Phaser.Game(
      //480, 720,
      holder.offsetWidth, holder.offsetHeight - (slot.offsetParent as HTMLElement).offsetTop,         // width x height
      Phaser.AUTO,      // the game context, 2D/3D
      'phaserSlot',    // id of the DOM element to add the game
      {
        preload: function(){game.preload()},
        create: function(){game.create()},
        update: function(){game.update()}
      }
    ));
    this.game = game;
  }

  phaserCreate(){
    this.navCtrl.pop();
  }

}
