import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TimerCallCounter provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TimerCallCounter {

  public count = 0;

  public message = '';

  public isSet = false;

  public betterTimer;

  public timerSubscription;

  public pauseTime;

  public sleepTicks = 0;

  constructor(public http: Http) {
    document.addEventListener('pause',() => {
      this.setPauseTime();
    });
    document.addEventListener('pause',() => {
      this.resume();
    });
    console.log('Hello TimerCallCounter Provider');
  }

  setTimer(){
    if(this.isSet == false){
      this.isSet = true;
      var totalLength;
      if(this.count % 2 == 0 && this.count < 7){
        totalLength = 1560;
      }else{
        totalLength = 360;
      }



      this.count = this.count + 1;
      if(this.count > 9){
          this.count = 0;
      }
      this.betterTimer = Observable.timer(0,1000);
      this.timerSubscription = this.betterTimer.subscribe(t=>this.message = this.isSet ? (((t + this.sleepTicks) > totalLength ? "00" : Math.floor((totalLength-(t + this.sleepTicks)) / 60).toString())
      + ":" 
      + (60 - (t + this.sleepTicks) % 60 == 60 || (t + this.sleepTicks) > totalLength ? "00" : (60 - (t + this.sleepTicks) % 60 < 10 ? "0" + (60 - (t + this.sleepTicks) % 60).toString() : (60 - (t + this.sleepTicks) % 60).toString())))
      : "00:00");
    }
  }

  setPauseTime(){
    this.pauseTime = new Date().getTime();
  }

  resume(){
    var resumeTime = new Date().getTime();
    this.sleepTicks = this.sleepTicks + Math.floor(resumeTime - this.pauseTime)/1000;
  }

  reset(){
    if(this.isSet == true){
      this.timerSubscription.unsubscribe();
      this.isSet = false;
    }
  }

  setCount(count){
  	this.count = count;
  }

  getCount(){
  	return this.count;
  }

}
