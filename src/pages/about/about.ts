import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { SignonService } from 'e1-service';

import { DataService } from '../../data/service';
import { AbWordSearchPage } from '../ab-word-search/ab-word-search';
/*
  E1 About Page
*/
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  aisVersion: any;
  defaultEnvironment: any;
  canLeave = false;
  errorMsg: string;
  serverDef: IServerConfig = {
    baseUrl: '',
    username: '',
    password: ''
  };
  connect() {
    this.errorMsg = '';
    let loading = this.loading.create({
      content: 'Connecting...'
    });
    loading.present();
    this.signon.testUrl(
      this.serverDef.baseUrl,
      {
        success: () => {
          this.storage.serverConfig = new Promise((resolve) => { resolve(this.serverDef) });
          this.canLeave = true;
          this.navCtrl.setRoot(AbWordSearchPage);
        },
        error: () => {
          this.errorMsg = 'Failed to connect!';
          this.canLeave = false;
        },
        done: () => { loading.dismiss(); }
      }
    );
  }
  ionViewCanLeave(): boolean {
    if (!this.canLeave) {
      this.errorMsg = 'Please connect to AIS';
    }
    return this.canLeave;
  }
  constructor(
    public navCtrl: NavController,
    public loading: LoadingController,
    public store: Store<any>,
    public storage: DataService,
    public signon: SignonService
  ) {
    this.aisVersion = store.select('server', 'defaultconfig', 'aisVersion');
    this.defaultEnvironment = store.select('server', 'defaultconfig', 'defaultEnvironment');
    // Fetch the server info
    storage.serverConfig
      .then(doc => {
        if (doc) {
          this.serverDef = doc;
          signon.testUrl(this.serverDef.baseUrl, {
            success: () => { this.canLeave = true }
          });
        }
      });
  }
}
