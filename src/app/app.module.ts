import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { E1ServiceModule, serverAction, initialServerState } from 'e1-service';
import { IonicStorageModule } from '@ionic/storage';
<<<<<<< HEAD
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
=======
>>>>>>> 35a3e59f41b5d498a8fa91a261d56cfe0ee3cb54

import { DataService } from '../data/service';
import { E1HelperService } from '../e1/e1-helper';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { AbWordSearchPage } from '../pages/ab-word-search/ab-word-search';
import { AbRevisionPage } from '../pages/ab-revision/ab-revision';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

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
<<<<<<< HEAD
    IonicStorageModule.forRoot({ name: '__cworkorders' }),
=======
    IonicStorageModule.forRoot({ name: '__chelloe1' }),
>>>>>>> 35a3e59f41b5d498a8fa91a261d56cfe0ee3cb54
    StoreModule.provideStore({ server: serverAction }, { server: initialServerState }),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
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
<<<<<<< HEAD
    Storage,
    DataService,
=======
    StorageService,
>>>>>>> 35a3e59f41b5d498a8fa91a261d56cfe0ee3cb54
    E1HelperService
  ]
})
export class AppModule { }
