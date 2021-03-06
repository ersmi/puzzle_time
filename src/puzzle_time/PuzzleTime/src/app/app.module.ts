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
import { UserSearchResultsComponent } from '../components/user-search-results/user-search-results';
import { TimeComponent } from '../components/time/time';
import { GalleryCardComponent } from '../components/gallery-card/gallery-card';
import { GalleryComponent } from '../components/gallery/gallery';
import { PuzzleComponent } from '../components/puzzle/puzzle';
import { TimerCallCounter } from '../providers/timer-call-counter';
import { PuzzleService } from '../providers/puzzle-service';
import { GameService } from '../providers/game-service';
import { Authenticator } from '../providers/authenticator';
import { UserService } from '../providers/user-service';
import { AddFriendsPage } from '../pages/add-friends/add-friends';
import { GameRewardPage } from '../pages/game-reward/game-reward';

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
    AddFriendsPage,
    GameRewardPage,
    UserInfoComponent,
    TimeComponent,
    GalleryCardComponent,
    PuzzleComponent,
    GalleryComponent,
    UserSearchResultsComponent
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
    AddFriendsPage,
    GameRewardPage,
    SubmitPage,
    UserInfoComponent,
    TimeComponent,
    GalleryCardComponent,
    PuzzleComponent,
    GalleryComponent,
    UserSearchResultsComponent
  ],
  providers: [
    TimerCallCounter,
    PuzzleService,
    GameService,
    Authenticator,
    UserService
  ]
})
export class AppModule {}
