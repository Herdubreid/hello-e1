import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { SignonService } from 'e1-service';

import { StorageService } from '../storage/service';
import { AboutPage } from '../pages/about/about';
import { AbWordSearchPage } from '../pages/ab-word-search/ab-word-search';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{ title: string, component: any }>;

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component)
      .catch(() => { });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  constructor(
    public platform: Platform,
    public storage: StorageService,
    public signon: SignonService
  ) {
    this.initializeApp();

    // Fetch the server info
    storage.serverConfig
      .then(doc => {
        if (doc) {
          signon.baseUrl = doc.baseUrl;
          signon.username = doc.username;
          signon.password = doc.password;
          this.rootPage = AbWordSearchPage;
        } else {
          this.rootPage = AboutPage;
        }
      });
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'A/B Word Search', component: AbWordSearchPage },
      { title: 'About', component: AboutPage }
    ];
  }
}
