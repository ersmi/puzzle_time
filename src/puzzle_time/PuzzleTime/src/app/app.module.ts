import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { Page2 } from '../pages/page2/page2';
import { UploadPage } from '../pages/upload/upload';
import { ProfilePage } from '../pages/profile/profile';
import { TimerPage } from '../pages/timer/timer';
import { SubmitPage } from '../pages/submit/submit';
import { FriendListPage } from '../pages/friend-list/friend-list';
import { GameInterfacePage } from '../pages/game-interface/game-interface';
import { SelectActivityPage } from '../pages/select-activity/select-activity';
import { ChoosePuzzlePage } from '../pages/choose-puzzle/choose-puzzle';
import { UserInfoComponent } from '../components/user-info/user-info';
import { GalleryCardComponent } from '../components/gallery-card/gallery-card';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Page2,
    LoginPage,
    UploadPage,
    ProfilePage,
    TimerPage,
    FriendListPage,
    GameInterfacePage,
    SelectActivityPage,
    ChoosePuzzlePage,
    SubmitPage,
    UserInfoComponent,
    GalleryCardComponent,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Page2,
    LoginPage,
    UploadPage,
    ProfilePage,
    TimerPage,
    FriendListPage,
    GameInterfacePage,
    SelectActivityPage,
    ChoosePuzzlePage,
    SubmitPage,
    UserInfoComponent,
    GalleryCardComponent
  ],
  providers: []
})
export class AppModule {}
