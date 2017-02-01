import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { SignonService } from 'e1-service';

import './defs';

const SERVER_CONFIG: string = 'SERVER_CONFIG';

/*
  Generated class for the Storage provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class StorageService {
  get serverConfig(): Promise<IServerConfig> {
    return this.storage.get(SERVER_CONFIG);
  }
  set serverConfig(serverConfig: Promise<IServerConfig>) {
    serverConfig
      .then(doc => {
        this.signon.baseUrl = doc.baseUrl;
        this.signon.username = doc.username;
        this.signon.password = doc.password;
        this.storage.set(SERVER_CONFIG, doc);
      });
  }
  constructor(
    public storage: Storage,
    public signon: SignonService
  ) {
  }
}
