import { Component } from '@angular/core';
import { TimerCallCounter } from '../../providers/timer-call-counter';

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
   
  constructor(public callCounter: TimerCallCounter) {

    callCounter.setTimer();
  }
}