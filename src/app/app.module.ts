import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NoteService } from './note.service';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database'

export const firebaseConfig = {
  apiKey: "AIzaSyD41C6ewv1bmMpNE0YnOg76IevnQ2ewcoo",
  authDomain: "dmicaula10ionicveiculo.firebaseapp.com",
  databaseURL: "https://dmicaula10ionicveiculo.firebaseio.com",
  projectId: "dmicaula10ionicveiculo",
  storageBucket: "dmicaula10ionicveiculo.appspot.com",
  messagingSenderId: "775303430760",
  appId: "1:775303430760:web:a94afdc74a61f3ad17f1dd",
  measurementId: "G-RLRC5VC1E7"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NoteService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
