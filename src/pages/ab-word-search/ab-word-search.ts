import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormService, ISummary } from 'e1-service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { E1HelperService } from '../../e1/e1-helper';
import { AbWordSearchRequest, IAbWordSearchRow } from '../../e1/ab-word-search';
import { AbRevisionPage } from '../ab-revision/ab-revision';
/*
  A/B Word Search
*/
@Component({
  selector: 'page-ab-word-search',
  templateUrl: 'ab-word-search.html'
})
export class AbWordSearchPage {
  status: Observable<string>;
  summary: Observable<ISummary>;
  rowset: Observable<IAbWordSearchRow[]>
  select(row: IAbWordSearchRow) {
    this.navCtrl.push(AbRevisionPage, { row });
  }
  search(searchEvent) {
    if (searchEvent.target.value) {
      let search = new AbWordSearchRequest(searchEvent.target.value.trim() + '*');
      this.form.request = search;
      this.e1.call(this.form);
    }
  }
  constructor(
    public navCtrl: NavController,
    public store: Store<any>,
    public e1: E1HelperService,
    public form: FormService
  ) {
    this.status = store
      .select(s => s.server.status);
    this.summary = store
      .select('server', 'formResponse', 'fs_P01BDWRD_W01BDWRDA', 'data', 'gridData', 'summary');
    this.rowset = store
      .select('server', 'formResponse', 'fs_P01BDWRD_W01BDWRDA', 'data', 'gridData', 'rowset');
  }
}
