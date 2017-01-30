import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

/*
  Generated class for the Time component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'time',
  templateUrl: 'time.html'
})
export class TimeComponent {
  public clock = '';
   
  constructor() {
    let betterTimer = Observable.timer(0,1000);
    betterTimer.subscribe(t=>this.clock = (t > 360 ? "00" : Math.floor((360-t) / 60).toString())
    + ":" 
    + (60 - t % 60 == 60 || t > 360 ? "00" : (60 - t % 60 < 10 ? "0" + (60 - t % 60).toString() : (60 - t % 60).toString())));
  }
}
