import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Hscode } from '../../models';
import { HscodeService } from '../hscode.service';
import { GET_HSCODE } from '../../reducers/hscode-detail';

@Component({
  selector: 'app-hscode',
  templateUrl: './hscode-detail.html',
  styleUrls: ['./hscode-detail.scss']
})
export class HscodeDetail implements OnInit {
  hscodeDetail: Observable<Hscode>;
  relatedCodes: Observable<Hscode[]>; 

  code: number;
  description: string;

  constructor(
    private store: Store<any>,
    private hscodeService: HscodeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(params => {
      this.code = +params['code'];
    });
    this.hscodeDetail = this.store.select('hscodeDetail');
    this.relatedCodes = this.store.select('relatedCodes');

    this.getHscode(this.code);

   }

  ngOnInit() {

  }

  getHscode(code: number){
    this.hscodeService.getHscodeDetail(this.code)
      .subscribe(res => {
        this.description = res.hscode.description;
        this.store.dispatch({type: GET_HSCODE, payload: res.hscode});
        this.store.dispatch({type: 'GET_RELATED_CODES', payload: res.relatedCodes});
      });
  }

  onSelect(code: number) {
    this.router.navigate(['/hscodes/', code]);
    console.log(code);
    this.getHscode(code);
  }

}
