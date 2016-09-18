import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { HscodeData } from '../../models';

@Component({
  selector: 'app-hscode',
  templateUrl: './hscode-detail.html',
  styleUrls: ['./hscode-detail.scss']
})
export class HscodeDetail implements OnInit {
  hscodeDetail: Observable<HscodeData>;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.hscodeDetail = this.store.select('hscodeDetail');
  }

}
