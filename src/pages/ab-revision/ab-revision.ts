import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { FormService } from 'e1-service';

import { E1HelperService } from '../../e1/e1-helper';
import { IAbWordSearchRow } from '../../e1/ab-word-search';
import { AbRevisionRequest, IAbRevisionFormData } from '../../e1/ab-revision';

/*
  A/B Revision
*/
@Component({
  selector: 'page-ab-revision',
  templateUrl: 'ab-revision.html'
})
export class AbRevisionPage {
  status: Observable<string>;
  row: IAbWordSearchRow;
  data: Observable<IAbRevisionFormData>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public store: Store<any>,
    public form: FormService,
    public e1: E1HelperService
  ) {
    this.status = store
      .select<string>('server', 'status');
    this.row = navParams.get('row');
    form.request = new AbRevisionRequest(this.row.mnAddressNumber_21.value);
    e1.call(form, {
      success: () => {
        this.data = store
          .select<IAbRevisionFormData>('server', 'formResponse', 'fs_P01012_W01012A', 'data');
      }
    });
  }
}
