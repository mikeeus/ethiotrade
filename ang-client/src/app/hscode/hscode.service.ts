import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ServiceHelpers } from '../helpers';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HscodeData } from '../models';

@Injectable()
export class HscodeService {
  hscodeDetailUrl: string = '/api/hscodes/'

  constructor(
    private store: Store<any>,
    private http: Http,
    private sH: ServiceHelpers
  ) { }

  getHscodeDetail(code: number): Observable<HscodeData> {
    return this.http.get(`${this.hscodeDetailUrl}/${code}`)
        .map(this.sH.getJson)
        .catch(this.sH.handleError)
  }

}
