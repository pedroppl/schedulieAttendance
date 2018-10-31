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
import { LoginManagerProvider } from '../providers/login-manager/login-manager';

import { HttpModule } from '@angular/http';
    import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ClockInOutServiceProvider } from '../providers/clock-in-out-service/clock-in-out-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ClockCheckPage,
    ConfirmPage,
    HomeManagerPage,
    LoginManagerPage,
   
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ClockCheckPage,
    ConfirmPage,
    HomeManagerPage,
    LoginManagerPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginManagerProvider,
    HttpClient,
    HttpClientModule,
    HttpModule,
    ClockInOutServiceProvider
   
  ]
})
export class AppModule {}
