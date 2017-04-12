import { Injectable } from '@angular/core';
import { BasePhaserGame } from './base-phaser-game';

@Injectable()
export class AnimalPhaserGame extends BasePhaserGame{
    private ANIMAL_WIDTH:number = 240;
    private ANIMAL_HEIGHT:number = 383;
    private NUM_ANIMALS:number = 4;
    private animalIds:string[] = ['dog', 'cat', 'mouse', 'bird'];
    private animals:Array<any> = [];
    private currentSequence:number[];
    private userSequence:number[];
    private currentTurn:number;
    private currentInput:number;
    private userTurn:boolean = true;
    private switchTurn:boolean = false;
    private gameOver:boolean = false;
    private check:boolean = false;
    private scoreCounter;
    constructor(){
        super();
    }

    preload(){
        super.preload();
        this.animalIds.sort(function(a,b){return (Math.random()-.5)});
        for(let i = 0; i < this.NUM_ANIMALS; i++){
            this.phaser.load.spritesheet(this.animalIds[i], 'assets/img/animals/' +  this.animalIds[i] + '.png', this.ANIMAL_WIDTH, this.ANIMAL_HEIGHT, 2);
            this.phaser.load.audio(this.animalIds[i] + '_snd', 'assets/sound/animals/' + this.animalIds[i] + '.mp3')
        }
    }

    create(){ //set up layout
        super.create();

        let decodeArr:Array<string> = [];

        for(let i = 0; i < this.NUM_ANIMALS; i++){
            let w = (this.phaser.width / 4) * (((i * 2) % 4) + 1);
            let h = (this.phaser.height / 4) * ((Math.floor(i / 2) * 2) + 1);
            this.animals[i] = this.phaser.add.sprite(w, h, this.animalIds[i]);
            this.animals[i].index = i;
            this.animals[i].snd = this.phaser.add.audio(this.animalIds[i] + '_snd');
            this.animals[i].snd.onStop.add(this.soundStopped, this);
            this.animals[i].snd.index = i;
            decodeArr.push(this.animalIds[i] + '_snd');
            this.animals[i].anchor.x = .5;
            this.animals[i].anchor.y = .5;
            this.animals[i].events.onInputDown.add(this.clickListener, this);
            this.animals[i].inputEnabled = true;
        }

        this.phaser.sound.setDecodedCallback(decodeArr, this.newGame, this);

        this.scoreCounter = this.phaser.add.text(this.phaser.world.centerX, this.phaser.world.centerY, "0", { font: "48px Arial", fill: "#FFFFFF", align: "center" });

        //this.newGame(); //set initial variables
    }

    update(){
        super.update();

        if(this.check){
            if(this.userTurn){
                for(let i = 0; i < this.currentInput; i++){
                    if(this.userSequence[i] != this.currentSequence[i]){
                        console.log("WRONG!!!");
                        this.gameOver = true;
                        let finalScore:Number = this.currentTurn - 1;
                        this.service.publishScore(finalScore.valueOf() / 3, finalScore.toString()) //high score is 20 TODO currently 5 to test
                        this.newGame();
                        return;
                    }
                }
            }
            if(this.currentInput < this.currentTurn){
                if(!this.userTurn){
                    this.playAnimal(this.currentSequence[this.currentInput]);
                }
            } else {
                this.switchTurn = true;
            }
            this.check = false;
        }else if(this.switchTurn){
            if(this.userTurn){
                this.userTurn = false;
                this.switchTurn = false;
                let n = Math.floor(Math.random() * this.NUM_ANIMALS);
                console.log(this.currentTurn);
                while(n==this.currentSequence[this.currentTurn - 1]){
                    n = Math.floor(Math.random() * this.NUM_ANIMALS);
                }
                this.currentSequence.push(n);
                this.currentTurn++;
                this.scoreCounter.text = this.currentTurn - 1;
                this.currentInput = 0;
                this.playAnimal(this.currentSequence[this.currentInput]);
            } else {
                this.userTurn = true;
                this.switchTurn = false;
                this.currentInput = 0;
                this.userSequence = [];
            }
        }
    }

    newGame(){
        this.gameOver = false;
        this.userTurn = true;
        this.switchTurn = true; //switch turn from user to cpu
        this.currentSequence = [];
        this.userSequence = [];
        this.currentTurn = 0;
        this.currentInput = 0;
        this.check = false;
        console.log("new g");
    }

    clickListener(obj){
        if(this.userTurn){
            this.userSequence.push(obj.index);
            this.playAnimal(obj.index)
        }
    }

    playAnimal(idx){
        this.animals[idx].snd.play();
        this.animals[idx].frame = 1;

    }

    soundStopped(a, b){
        this.animals[a.index].frame = 0;
        this.currentInput++;
        this.check = true;
    }


}