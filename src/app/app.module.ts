import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from "angularfire2";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DatabaseService } from '../providers/database-service/database-service';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpModule } from '@angular/http';

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBRCp1ZNJX0rBE-wMHKOhjlpR3-YG6gH-4",
  authDomain: "trackmycourse.firebaseapp.com",
  databaseURL: "https://trackmycourse.firebaseio.com",
  projectId: "trackmycourse",
  storageBucket: "trackmycourse.appspot.com",
  messagingSenderId: "503884320955"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatabaseService,   
    AngularFireDatabase, 
    { provide: ErrorHandler, useClass: IonicErrorHandler },    
  ]
})
export class AppModule { }
