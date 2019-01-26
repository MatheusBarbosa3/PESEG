import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, LoadingController } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { QuestionarioPage } from '../pages/questionario/questionario';
import { Questionario2Page } from '../pages/questionario2/questionario2';
import { Questionario3Page } from '../pages/questionario3/questionario3';
import { Questionario4Page } from '../pages/questionario4/questionario4';
import { ResultadoPage } from '../pages/resultado/resultado';
import { SobrePage } from '../pages/sobre/sobre';
import { MelhoriaPage } from '../pages/melhoria/melhoria';
import { RequisitosPage } from '../pages/requisitos/requisitos';
import { ServicoProvider } from '../providers/servico/servico';
import { NotifierModule, NotifierOptions } from 'angular-notifier';

var config = {
  apiKey: "AIzaSyCD-yVpArc_WkiyE7sWZhyTb5fwxIfL4JE",
  authDomain: "peseg-fc173.firebaseapp.com",
  databaseURL: "https://peseg-fc173.firebaseio.com",
  projectId: "peseg-fc173",
  storageBucket: "peseg-fc173.appspot.com",
  messagingSenderId: "847705539800"

};
const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'left',
			distance: 12
		},
		vertical: {
			position: 'bottom',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 1500,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuestionarioPage,
    Questionario2Page,
    Questionario3Page,
    Questionario4Page,
    ResultadoPage,
    MelhoriaPage,
    SobrePage,
    RequisitosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    NotifierModule.withConfig(customNotifierOptions),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuestionarioPage,
    Questionario2Page,
    Questionario3Page,
    Questionario4Page,
    ResultadoPage,
    MelhoriaPage,
    SobrePage,
    RequisitosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoadingController,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ServicoProvider
  ]
})
export class AppModule { }
