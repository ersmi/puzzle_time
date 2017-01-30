import { Component } from '@angular/core';

/*
  Generated class for the Puzzle component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'puzzle',
  templateUrl: 'puzzle.html'
})
export class PuzzleComponent {

  columns:number = 3;
  rows:number = 3;
  //least significant bit is top left, increases left to right, top to bottom
  //1 means we have obtained that piece, 0 is a hole.
  piecesData:number = 0b011000011;

  constructor() {
    //console.log('Hello Puzzle Component');
    //this.text = 'Hello World';
  }

  drawGrid(){
    let overlay:HTMLCanvasElement = document.getElementById("gridOverlay") as HTMLCanvasElement;
    let overlayContext:CanvasRenderingContext2D = overlay.getContext("2d");
    let puzzleImg:HTMLImageElement = document.getElementById("puzzleImg") as HTMLImageElement;
    overlay.width = puzzleImg.width;
    overlay.height = puzzleImg.height;
    let pieceWidth = puzzleImg.width / this.columns;
    let pieceHeight = puzzleImg.height / this.rows;
    let pData:number = this.piecesData; //copy so we can modify
    let topData:number = pData << this.columns;
    let leftData:number = pData << 1;
    overlayContext.fillStyle = "#F0F0F0";
    overlayContext.strokeStyle = "#DCDCDC";
    for(let r:number = 0; r < this.rows; r++){
      for(let c:number = 0; c < this.columns; c++){ //how many languages does this project use?
        if(pData & 1){ //binary AND with the least significant bit
          overlayContext.lineWidth = .5;
          overlayContext.strokeRect(pieceWidth * c, pieceHeight * r, pieceWidth, pieceHeight);
        } else { // LSB == 0 (hole)
          overlayContext.lineWidth = 2;
          overlayContext.fillRect(pieceWidth * c, pieceHeight * r, pieceWidth, pieceHeight);
          overlayContext.strokeRect((pieceWidth * c) + 1, (pieceHeight * r) + 1, pieceWidth - 1, pieceHeight - 1);
          //shadow
          overlayContext.lineWidth = 2;
          overlayContext.strokeStyle = "#A9A9A9";
          if(r == 0 || topData & 1){
            overlayContext.beginPath();
            overlayContext.moveTo((pieceWidth * c) + 1, (pieceHeight * r) + 2);
            overlayContext.lineTo((pieceWidth * (c + 1)) - 1, (pieceHeight * r) + 2);
            overlayContext.stroke();
          }
          if(c == 0 || leftData & 1){
            overlayContext.beginPath();
            overlayContext.moveTo((pieceWidth * c) + 2, (pieceHeight * r) + 1);
            overlayContext.lineTo((pieceWidth * c) + 2, (pieceHeight * (r + 1)) - 1);
            overlayContext.stroke();
          }
          overlayContext.strokeStyle = "#DCDCDC";
        }
        pData = pData >> 1; //right bit shift
        topData = topData >> 1;
        leftData = leftData >> 1;
        console.log("pdata = " + pData);
      }
    }
  }

}
