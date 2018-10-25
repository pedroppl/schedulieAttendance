import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ClockCheckPage } from '../pages/clock-check/clock-check';
import { ConfirmPage } from '../pages/confirm/confirm';
import { HomeManagerPage } from '../pages/home-manager/home-manager';
import { LoginManagerPage } from '../pages/login-manager/login-manager';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ClockCheckPage,
    ConfirmPage,
    HomeManagerPage,
    LoginManagerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ClockCheckPage,
    ConfirmPage,
    HomeManagerPage,
    LoginManagerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
