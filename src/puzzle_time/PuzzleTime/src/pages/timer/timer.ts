import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TimeComponent } from './../../components/time/time';
import { GalleryComponent } from './../../components/gallery/gallery';
import { LocalNotifications } from 'ionic-native';
import { SelectActivityPage } from '../select-activity/select-activity';
import { TimerCallCounter } from '../../providers/timer-call-counter';

/*
  Generated class for the Timer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-timer',
  templateUrl: 'timer.html',
  entryComponents: [TimeComponent, GalleryComponent]
})
export class TimerPage {

  public returnToHome;

  constructor(public navCtrl: NavController, public callCounter: TimerCallCounter) {
    var startTime = new Date().getTime();
    var inc;
    var count = callCounter.getCount(); 
    this.returnToHome = callCounter.returnToHome;
    if(count % 2 == 0 && count < 7){
      inc = 1560000;
    }else{
      inc = 360000;
    }

    inc = 10000;
    
    //(26 Work , 6 Break) , (26 Work , 6 Break) , (26 Work , 6 Break) - (26 Work - 6 Break - 6 Break - 6 Break)
    if (callCounter.isSet == false)
    {
      LocalNotifications.schedule({
      text: 'Timer expired',
      at: new Date(startTime + inc),
      led: 'FF0000',
      sound: null
      });

      setTimeout(() => {
        this.goToActivity();
      }, inc);
    }
  }

  goToActivity(){
    this.callCounter.reset();
    if(this.returnToHome){
      this.navCtrl.popToRoot();
    }else{
      this.navCtrl.push(SelectActivityPage);
    }
  }

  ionViewDidLoad() {
    //console.log('Hello TimerPage Page');
  }

}
