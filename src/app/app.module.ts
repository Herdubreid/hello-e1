import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { E1ServiceModule, e1Reducer } from 'e1-service';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DataService } from '../data/service';
import { E1HelperService } from '../e1/e1-helper';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { AbWordSearchPage } from '../pages/ab-word-search/ab-word-search';
import { AbRevisionPage } from '../pages/ab-revision/ab-revision';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AbWordSearchPage,
    AbRevisionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({ name: '__chelloe1' }),
    StoreModule.forRoot({ server: e1Reducer }),
    StoreDevtoolsModule.instrument(),
    E1ServiceModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AbWordSearchPage,
    AbRevisionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    E1HelperService,
    DataService
  ]
})
export class AppModule { }
