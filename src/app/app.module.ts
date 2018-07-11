import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ProfilePage } from '../pages/profile/profile';
import { TrainPage } from '../pages/train/train';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PlanPage} from '../pages/plan/plan';
import {SubscribePage } from '../pages/subscribe/subscribe';
import {TrainerPage} from '../pages/trainer/trainer';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    TrainPage,
    HomePage,
    TabsPage,
    PlanPage,
    SubscribePage,
    TrainerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    TrainPage,
    HomePage,
    TabsPage,
    PlanPage,
    SubscribePage,
    TrainerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
