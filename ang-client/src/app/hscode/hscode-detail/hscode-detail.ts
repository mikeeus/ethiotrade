import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Hscode } from '../../models';
import { HscodeService } from '../hscode.service';
import { AnnualChart } from '../../models';
// Reducer actions
import { GET_HSCODE, GET_RELATED_CODES } from '../../reducers/hscode-detail';
import { LOAD_HSCODE_CHART } from '../../reducers/charts';

@Component({
  selector: 'app-hscode',
  templateUrl: './hscode-detail.html',
  styleUrls: ['./hscode-detail.scss']
})
export class HscodeDetail implements OnInit {
  hscodeDetail: Observable<Hscode>;
  relatedCodes: Observable<Hscode[]>; 
  hscodeChart: Observable<AnnualChart>;

  code: number;
  description: string;
  
  constructor(
    private store: Store<any>,
    private hscodeService: HscodeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.hscodeDetail = this.store.select('hscodeDetail');
    this.relatedCodes = this.store.select('relatedCodes');
    this.hscodeChart = this.store.select('hscodeChart');

   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let code = +params['code'];
      this.hscodeService.getHscodeDetail(code)
          .subscribe(res => {
            this.store.dispatch({type: GET_HSCODE, payload: res.hscode});
            this.store.dispatch({type: GET_RELATED_CODES, payload: res.relatedCodes});
            this.code = res.hscode.code;
            this.description = res.hscode.description;
          });
    });
  }

  onSelect(code: number) {
    this.router.navigate(['/hscodes/', code]);
  }

}
