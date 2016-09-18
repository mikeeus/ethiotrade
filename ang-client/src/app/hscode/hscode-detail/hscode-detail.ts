import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { HscodeData } from '../../models';
import { HscodeService } from '../hscode.service';
import { GET_HSCODE } from '../../reducers/hscode-detail';

@Component({
  selector: 'app-hscode',
  templateUrl: './hscode-detail.html',
  styleUrls: ['./hscode-detail.scss']
})
export class HscodeDetail implements OnInit {
  hscodeDetail: Observable<HscodeData>;
  code: number;

  constructor(
    private store: Store<any>,
    private hscodeService: HscodeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.code = +params['code'];
    })
    this.hscodeDetail = this.store.select('hscodeDetail');
    this.hscodeService.getHscodeDetail(this.code)
        .subscribe(res => {
          this.store.dispatch({type: GET_HSCODE, payload: res})
        });
  }

}
