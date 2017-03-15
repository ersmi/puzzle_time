import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { TimerPage } from '../pages/timer/timer';
import { UploadPage } from '../pages/upload/upload';
import { ProfilePage } from '../pages/profile/profile';
import { FriendListPage } from '../pages/friend-list/friend-list';
import { SubmitPage } from '../pages/submit/submit';
import { GameInterfacePage } from '../pages/game-interface/game-interface';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Timer', component: TimerPage },
      { title: 'Upload', component: UploadPage },
      { title: 'Profile', component: ProfilePage},
      { title: 'Friend List', component: FriendListPage},
      { title: 'Submit', component: SubmitPage},
      { title: 'Game Test', component: GameInterfacePage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
