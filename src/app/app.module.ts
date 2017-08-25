import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProgramPage } from '../pages/program/program';
import { AktualityPage } from '../pages/aktuality/aktuality';
import { BorekPage } from '../pages/borek/borek';
import { DenPage } from '../pages/den/den';
import { KontaktyPage } from '../pages/kontakty/kontakty';

import { AktualityData } from '../pages/aktuality/aktuality';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProgramPage,
    AktualityPage,
    BorekPage,
    DenPage,
    KontaktyPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProgramPage,
    AktualityPage,
    BorekPage,
    DenPage,
    KontaktyPage,
  ],
  providers: [
    AktualityData,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
