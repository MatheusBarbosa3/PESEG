import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, LoadingController } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QuestionarioPage } from '../pages/questionario/questionario';
import { Questionario2Page } from '../pages/questionario2/questionario2';
import { Questionario3Page } from '../pages/questionario3/questionario3';
import { Questionario4Page } from '../pages/questionario4/questionario4';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuestionarioPage,
    Questionario2Page, 
    Questionario3Page,
    Questionario4Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuestionarioPage,
    Questionario2Page,
    Questionario3Page,
    Questionario4Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoadingController,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
