import { Injectable } from '@angular/core';
//import { Phaser } from '../phaser.js';

@Injectable()
export class BasePhaserGame{
    public phaser;
    public service;
    constructor(){ //signals for game end, game save, game load, game score
    }

    setPhaser(p){
        this.phaser = p;
    }

    preload(){
    }

    create(){
    }

    update(){
    }


}
